import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti48nsbex.css';
import '../../css/a/ar3qzv4of.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti48nsbex"/><path class="ar3qzv4of"/>`,
		"fallback": "energy-icons:hvdc-converter-20",
	});
}

export default Component;
