import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vopump9wh.css';
import '../../css/b/b4sa2gbal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vopump9wh"/><path class="b4sa2gbal"/></g>`,
		"fallback": "vadivam:cassette-tape",
	});
}

export default Component;
