import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i5c-on1sp.css';
import '../../css/b/bvhivqbfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="i5c-on1sp"/><path class="bvhivqbfw"/></g>`,
		"fallback": "hugeicons:cylinder-02",
	});
}

export default Component;
