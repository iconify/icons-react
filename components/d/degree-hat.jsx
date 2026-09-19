import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/im839mbzz.css';
import '../../css/m/m37tbt41a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="im839mbzz"/><path class="m37tbt41a"/></g>`,
		"fallback": "icon-park-outline:degree-hat",
	});
}

export default Component;
