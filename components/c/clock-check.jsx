import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r4i1zib1d.css';
import '../../css/w/wu7510bky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r4i1zib1d"/><path class="wu7510bky"/></g>`,
		"fallback": "tabler:clock-check",
	});
}

export default Component;
