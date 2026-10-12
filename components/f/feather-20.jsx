import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2-3vzbzw.css';
import '../../css/y/ycekm8byx.css';
import '../../css/v/vwtbn-brr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2-3vzbzw"/><path class="ycekm8byx"/><path class="vwtbn-brr"/>`,
		"fallback": "energy-icons:feather-20",
	});
}

export default Component;
