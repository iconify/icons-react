import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h5v13_bfu.css';
import '../../css/o/orsjqzskv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h5v13_bfu"/><path class="orsjqzskv"/></g>`,
		"fallback": "keyline-icons:clock-two-tone",
	});
}

export default Component;
