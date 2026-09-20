import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyrvqk-2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyrvqk-2g"/>`,
		"fallback": "tabler:help-small",
	});
}

export default Component;
