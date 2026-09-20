import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/w/w5ebk3e4s.css';
import '../../css/k/kp36ymdvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="w5ebk3e4s"/><path class="kp36ymdvj"/></g>`,
		"fallback": "streamline-cyber:computer-imac-smiley-face",
	});
}

export default Component;
