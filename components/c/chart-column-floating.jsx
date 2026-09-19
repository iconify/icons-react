import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0rt-zb2s.css';
import '../../css/h/hgpzimtyu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0rt-zb2s"/><path class="hgpzimtyu"/>`,
		"fallback": "carbon:chart-column-floating",
	});
}

export default Component;
