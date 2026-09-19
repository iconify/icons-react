import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cm4ry-biv.css';
import '../../css/b/bk0qoubdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="chatbubbles-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="cm4ry-biv"/><path class="bk0qoubdl"/></g></g>`,
		"fallback": "cuida:chatbubbles-outline",
	});
}

export default Component;
