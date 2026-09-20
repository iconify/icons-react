import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xuz-pwbwc.css';
import '../../css/k/k3mhnyqbg.css';
import '../../css/a/ayo73pbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xuz-pwbwc"/><path class="k3mhnyqbg"/><path class="ayo73pbzj"/></g>`,
		"fallback": "keyline-icons:cursor-off-duotone",
	});
}

export default Component;
