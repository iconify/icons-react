import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/s/smw8n4bjx.css';
import '../../css/o/oyi_24bwa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="smw8n4bjx"/><path class="oyi_24bwa"/></g>`,
		"fallback": "icon-park-solid:card-two",
	});
}

export default Component;
