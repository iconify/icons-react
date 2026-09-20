import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xjpqbwb8y.css';
import '../../css/z/zn7tbabdp.css';
import '../../css/t/tbfod3hgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xjpqbwb8y"/><path class="zn7tbabdp"/><rect class="tbfod3hgq"/></g>`,
		"fallback": "mage:arrow-down-right-square",
	});
}

export default Component;
