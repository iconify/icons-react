import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ijbbsoypq.css';
import '../../css/k/kqpfjlbey.css';
import '../../css/m/m6vp56bkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ijbbsoypq"/><path class="kqpfjlbey"/><path class="m6vp56bkl"/></g>`,
		"fallback": "streamline-cyber:gameboy",
	});
}

export default Component;
