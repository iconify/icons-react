import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ao2gcsqwp.css';
import '../../css/u/uhf267b6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ao2gcsqwp"/><path class="uhf267b6d"/></g>`,
		"fallback": "keyline-icons:bars-progress-two-tone",
	});
}

export default Component;
