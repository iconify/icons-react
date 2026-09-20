import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg2xj8bky.css';

const viewBox = {"width":101,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg2xj8bky"/>`,
		"fallback": "thesvg-color:caldotcom-dark",
	});
}

export default Component;
