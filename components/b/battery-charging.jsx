import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/obsjfkxrf.css';
import '../../css/o/o-5y5_bpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="obsjfkxrf"/><path class="o-5y5_bpo"/></g>`,
		"fallback": "akar-icons:battery-charging",
	});
}

export default Component;
