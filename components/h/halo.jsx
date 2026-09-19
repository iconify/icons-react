import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge4x5w0yg.css';
import '../../css/m/ma50-9zbw.css';
import '../../css/y/yzzk64yza.css';
import '../../css/d/dy4z9objq.css';
import '../../css/x/x3tzy5bjf.css';
import '../../css/q/quasufbyv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge4x5w0yg"/><path class="ma50-9zbw"/><path class="yzzk64yza"/><path class="dy4z9objq"/><path class="x3tzy5bjf"/><path class="quasufbyv"/>`,
		"fallback": "fxemoji:halo",
	});
}

export default Component;
