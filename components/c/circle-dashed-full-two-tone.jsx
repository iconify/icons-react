import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/esurwb5xo.css';
import '../../css/i/iupl2qevp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="esurwb5xo"/><path class="iupl2qevp"/></g>`,
		"fallback": "keyline-icons:circle-dashed-full-two-tone",
	});
}

export default Component;
