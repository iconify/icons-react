import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj_q1lb9k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj_q1lb9k"/>`,
		"fallback": "fxemoji:exclaimationquestionmark",
	});
}

export default Component;
