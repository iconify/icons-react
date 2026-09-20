import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o_v9noxlo.css';
import '../../css/h/hyai77bxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o_v9noxlo"/><path class="hyai77bxu"/></g>`,
		"fallback": "keyline-icons:cctv-two-tone",
	});
}

export default Component;
