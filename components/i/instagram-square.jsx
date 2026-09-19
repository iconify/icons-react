import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru5m9utxw.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru5m9utxw"/>`,
		"fallback": "fa-brands:instagram-square",
	});
}

export default Component;
