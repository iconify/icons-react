import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7-k3vx_v.css';
import '../../css/t/txo8pobhd.css';
import '../../css/m/mtna5qb0q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7-k3vx_v"/><path class="txo8pobhd"/><path class="mtna5qb0q"/>`,
		"fallback": "carbon:chart-radial",
	});
}

export default Component;
