import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y24w7huhx.css';
import '../../css/t/tqkbqbbzb.css';
import '../../css/g/g7s9nkxpw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y24w7huhx"/><path class="tqkbqbbzb"/><path class="g7s9nkxpw"/>`,
		"fallback": "energy-icons:engineer-20-bold",
	});
}

export default Component;
