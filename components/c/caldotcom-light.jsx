import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxqrm3b9o.css';

const viewBox = {"width":101,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxqrm3b9o"/>`,
		"fallback": "thesvg-color:caldotcom-light",
	});
}

export default Component;
