import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mpdpocb9m.css';
import '../../css/a/aenh5827s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mpdpocb9m"/><path class="aenh5827s"/></g>`,
		"fallback": "solar:bag-music-outline",
	});
}

export default Component;
