import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbgmgpb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbgmgpb_a"/>`,
		"fallback": "noviair:clipboard-list",
	});
}

export default Component;
