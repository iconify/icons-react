import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xccoeqbhm.css';
import '../../css/w/wqol9ac8v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xccoeqbhm"/><path class="wqol9ac8v"/>`,
		"fallback": "energy-icons:chalkboard-20",
	});
}

export default Component;
