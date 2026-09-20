import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1bx12_kt.css';

const viewBox = {"width":200,"height":200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1bx12_kt"/>`,
		"fallback": "material-icon-theme:crystal",
	});
}

export default Component;
