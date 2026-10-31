import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sazxk1b4f.css';
import '../../css/r/rxftmk89r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sazxk1b4f"/><path class="rxftmk89r"/></g>`,
		"fallback": "coolicons:grid-alt-duocolor-round",
	});
}

export default Component;
