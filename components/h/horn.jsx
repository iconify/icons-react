import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp_qd1bzg.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp_qd1bzg"/>`,
		"fallback": "picon:horn",
	});
}

export default Component;
