import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cc-mb1skd.css';
import '../../css/i/i_z5bmbxi.css';
import '../../css/b/b_garkb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cc-mb1skd"/><path class="i_z5bmbxi"/><path class="b_garkb1h"/></g>`,
		"fallback": "lucide-lab:hat-baseball",
	});
}

export default Component;
