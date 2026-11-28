import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wrp5qbb3g.css';
import '../../css/o/oeg3jebkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wrp5qbb3g"/><path class="oeg3jebkx"/></g>`,
		"fallback": "lucide:folder-input",
	});
}

export default Component;
