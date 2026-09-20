import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/cuc7r9bua.css';
import '../../css/e/ek0vygbre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="cuc7r9bua"/><path class="ek0vygbre"/></g>`,
		"fallback": "streamline-cyber:home-scene",
	});
}

export default Component;
