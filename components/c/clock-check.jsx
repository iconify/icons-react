import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/k917d4bou.css';
import '../../css/y/yddab4ber.css';
import '../../css/p/p7ct5pm2p.css';
import '../../css/e/eywhs0bnc.css';
import '../../css/o/o9p1zzt3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="k917d4bou wm-shadow"/><path class="wm-shadow yddab4ber"/><path class="p7ct5pm2p"/><path class="eywhs0bnc"/><path class="o9p1zzt3p wm-s"/></g>`,
		"fallback": "withicons-brutal:clock-check",
	});
}

export default Component;
