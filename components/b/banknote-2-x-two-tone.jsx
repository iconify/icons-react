import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dwufu6b3h.css';
import '../../css/n/n2lwogy7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dwufu6b3h"/><path class="n2lwogy7a"/></g>`,
		"fallback": "keyline-icons:banknote-2-x-two-tone",
	});
}

export default Component;
