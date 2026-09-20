import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u2fthmbna.css';
import '../../css/e/eraiu__rv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u2fthmbna"/><path class="eraiu__rv"/></g>`,
		"fallback": "keyline-icons:clouds-two-tone",
	});
}

export default Component;
