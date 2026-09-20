import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mptcd8b5i.css';
import '../../css/r/rsai_abhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mptcd8b5i"/><path class="rsai_abhp"/></g>`,
		"fallback": "lucide:airplay",
	});
}

export default Component;
