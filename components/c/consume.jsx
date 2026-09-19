import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rqqj4xtwj.css';
import '../../css/b/btaqqpbbe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="rqqj4xtwj"/><path class="btaqqpbbe"/></g>`,
		"fallback": "icon-park-outline:consume",
	});
}

export default Component;
