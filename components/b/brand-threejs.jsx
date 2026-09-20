import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/da_vrxyhp.css';
import '../../css/t/t407-ooiy.css';
import '../../css/s/sbx-7_3rt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="da_vrxyhp"/><path class="t407-ooiy"/><path class="sbx-7_3rt"/></g>`,
		"fallback": "tabler:brand-threejs",
	});
}

export default Component;
