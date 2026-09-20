import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vfy9zwu-h.css';
import '../../css/i/is41me23v.css';
import '../../css/a/ayo73pbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vfy9zwu-h"/><path class="is41me23v"/><path class="ayo73pbzj"/></g>`,
		"fallback": "keyline-icons:file-off-duotone",
	});
}

export default Component;
