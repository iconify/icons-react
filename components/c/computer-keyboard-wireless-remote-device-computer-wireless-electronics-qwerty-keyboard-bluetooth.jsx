import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/so40fg5pg.css';
import '../../css/z/zzv7ebfeu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="so40fg5pg"/><path class="zzv7ebfeu"/></g>`,
		"fallback": "streamline:computer-keyboard-wireless-remote-device-computer-wireless-electronics-qwerty-keyboard-bluetooth",
	});
}

export default Component;
