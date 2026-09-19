import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m35bpgbdz.css';
import '../../css/v/v696yfb0r.css';
import '../../css/m/mrxc-mb-s.css';
import '../../css/z/zdx0htb8r.css';
import '../../css/i/iy2rondas.css';
import '../../css/i/i_o8fhb6i.css';
import '../../css/u/uzaovqzzs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m35bpgbdz"/><path class="v696yfb0r"/><path class="mrxc-mb-s"/><path class="zdx0htb8r"/><circle class="iy2rondas"/><path class="i_o8fhb6i"/><path class="uzaovqzzs"/>`,
		"fallback": "fxemoji:documentwithpicture",
	});
}

export default Component;
