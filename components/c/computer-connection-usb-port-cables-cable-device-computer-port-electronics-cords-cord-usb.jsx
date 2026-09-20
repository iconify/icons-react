import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/ftzocbbpo.css';
import '../../css/a/acfxm9boj.css';
import '../../css/c/clvaxwg5s.css';
import '../../css/f/fesp_3bpy.css';
import '../../css/t/thn-uns6s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="ftzocbbpo"/><path class="acfxm9boj"/><circle class="clvaxwg5s"/><path class="fesp_3bpy"/><circle class="thn-uns6s"/></g>`,
		"fallback": "streamline:computer-connection-usb-port-cables-cable-device-computer-port-electronics-cords-cord-usb",
	});
}

export default Component;
