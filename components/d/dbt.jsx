import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q284ii8xf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q284ii8xf"/>`,
		"fallback": "devicon:dbt",
	});
}

export default Component;
