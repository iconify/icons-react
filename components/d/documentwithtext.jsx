import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m35bpgbdz.css';
import '../../css/h/hywj0nnlp.css';
import '../../css/u/uzaovqzzs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m35bpgbdz"/><path class="hywj0nnlp"/><path class="uzaovqzzs"/>`,
		"fallback": "fxemoji:documentwithtext",
	});
}

export default Component;
