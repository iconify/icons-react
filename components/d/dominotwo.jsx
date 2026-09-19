import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywv-5vb4p.css';

const viewBox = {"width":961,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywv-5vb4p"/>`,
		"fallback": "whh:dominotwo",
	});
}

export default Component;
