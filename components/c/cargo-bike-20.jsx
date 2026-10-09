import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu01-jbtn.css';
import '../../css/r/rspsi8b7x.css';
import '../../css/g/ganklmxwt.css';
import '../../css/e/etikf8b0q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu01-jbtn"/><path class="rspsi8b7x"/><path class="ganklmxwt"/><path class="etikf8b0q"/>`,
		"fallback": "energy-icons:cargo-bike-20",
	});
}

export default Component;
