import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gyb0ttgij.css';
import '../../css/c/cqdi93nbk.css';
import '../../css/t/t4376zjzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gyb0ttgij"/><path class="cqdi93nbk wm-a"/><path class="t4376zjzy wm-s"/></g>`,
		"fallback": "withicons:flip-horizontal-solid",
	});
}

export default Component;
