import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mo-147opz.css';
import '../../css/j/jz-rb3dxa.css';
import '../../css/s/sq1holbsl.css';
import '../../css/k/kn5gso_lu.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/n/npgeuzbag.css';
import '../../css/p/ps5kto3no.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mo-147opz"/><path class="jz-rb3dxa"/><path class="sq1holbsl"/><path class="kn5gso_lu"/><g class="mc2zb0bvp"><path class="npgeuzbag"/><path class="ps5kto3no"/></g></g>`,
		"fallback": "solar:grip-vertical-bold-duotone",
	});
}

export default Component;
