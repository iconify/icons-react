import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/izlatwbhd.css';
import '../../css/d/d31vs5_su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="izlatwbhd"/><path class="d31vs5_su"/></g>`,
		"fallback": "lucide:image-off",
	});
}

export default Component;
