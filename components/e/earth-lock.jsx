import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cz1j5_vyb.css';
import '../../css/g/gbw7dvbeh.css';
import '../../css/d/dydq24bhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cz1j5_vyb"/><path class="gbw7dvbeh"/><rect class="dydq24bhz"/></g>`,
		"fallback": "lucide:earth-lock",
	});
}

export default Component;
