import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/oyq5l32hv.css';
import '../../css/m/mp3b3lb8i.css';
import '../../css/d/dx2uoqbap.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="oyq5l32hv"/><path class="mp3b3lb8i"/><path class="dx2uoqbap"/></g>`,
		"fallback": "icon-park-outline:download-laptop",
	});
}

export default Component;
