import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvje_n8dl.css';
import '../../css/j/jryvqzq_f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvje_n8dl"/><path class="jryvqzq_f"/>`,
		"fallback": "selfhst:erugo-dark",
	});
}

export default Component;
