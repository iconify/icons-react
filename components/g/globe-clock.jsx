import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/frd8jk2_u.css';
import '../../css/i/igpa2gbno.css';
import '../../css/c/c_63rybwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="frd8jk2_u"/><path class="igpa2gbno"/><circle class="c_63rybwj"/></g>`,
		"fallback": "lucide:globe-clock",
	});
}

export default Component;
