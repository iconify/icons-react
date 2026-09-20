import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mpdpocb9m.css';
import '../../css/c/c62bycc4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mpdpocb9m"/><path class="c62bycc4j"/></g>`,
		"fallback": "solar:bag-music-2-outline",
	});
}

export default Component;
