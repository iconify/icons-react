import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvdiahk1x.css';
import '../../css/y/yphrhqbrt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvdiahk1x"/><path class="yphrhqbrt"/>`,
		"fallback": "cil:flip-to-back",
	});
}

export default Component;
