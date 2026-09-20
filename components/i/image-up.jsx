import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tqi_kabmz.css';
import '../../css/j/j9o1fr4oa.css';
import '../../css/n/nol19vq4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tqi_kabmz"/><path class="j9o1fr4oa"/><circle class="nol19vq4t"/></g>`,
		"fallback": "lucide:image-up",
	});
}

export default Component;
