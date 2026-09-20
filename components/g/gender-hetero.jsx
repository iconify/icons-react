import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p336_d8fl.css';
import '../../css/c/c2c-t2a0m.css';
import '../../css/k/kfw0-w9ah.css';
import '../../css/b/bzpx0yzor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p336_d8fl"/><path class="c2c-t2a0m"/><path class="kfw0-w9ah"/><path class="bzpx0yzor"/></g>`,
		"fallback": "streamline-ultimate-color:gender-hetero",
	});
}

export default Component;
