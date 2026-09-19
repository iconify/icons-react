import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9e3p7bjr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9e3p7bjr"/>`,
		"fallback": "codicon:fish4-sad",
	});
}

export default Component;
