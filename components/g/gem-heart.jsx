import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dab_wmkpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dab_wmkpt"/>`,
		"fallback": "noviair:gem-heart",
	});
}

export default Component;
