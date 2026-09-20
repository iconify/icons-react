import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d7_zg5lyr.css';
import '../../css/r/ra8ngubdl.css';
import '../../css/m/mfhnhdc3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d7_zg5lyr"/><path class="ra8ngubdl"/><path class="mfhnhdc3d"/></g>`,
		"fallback": "lucide:beef-off",
	});
}

export default Component;
