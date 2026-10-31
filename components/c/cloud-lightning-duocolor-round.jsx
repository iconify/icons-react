import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qah_-9ebo.css';
import '../../css/b/b1egz1dwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qah_-9ebo"/><path class="b1egz1dwh"/></g>`,
		"fallback": "coolicons:cloud-lightning-duocolor-round",
	});
}

export default Component;
