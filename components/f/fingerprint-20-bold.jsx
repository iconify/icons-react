import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti32esbih.css';
import '../../css/w/wj5v6jccx.css';
import '../../css/p/pkn8zcbur.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti32esbih"/><path class="wj5v6jccx"/><path class="pkn8zcbur"/>`,
		"fallback": "energy-icons:fingerprint-20-bold",
	});
}

export default Component;
