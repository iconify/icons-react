import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cj3uhabop.css';
import '../../css/m/mjauwzbkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cj3uhabop"/><path class="mjauwzbkx"/></g>`,
		"fallback": "tabler:home-spark",
	});
}

export default Component;
