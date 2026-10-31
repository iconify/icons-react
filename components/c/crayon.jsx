import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rwazahv6a.css';
import '../../css/b/bi7ozyb6i.css';
import '../../css/n/n2jpe04_t.css';
import '../../css/k/kb-riodzn.css';
import '../../css/c/cd823acyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="rwazahv6a wm-shadow"/><path class="bi7ozyb6i wm-shadow"/><path class="n2jpe04_t"/><path class="kb-riodzn"/><path class="cd823acyk"/></g>`,
		"fallback": "withicons-brutal:crayon",
	});
}

export default Component;
