import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvje_n8dl.css';
import '../../css/x/x662ljhor.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvje_n8dl"/><path class="x662ljhor"/>`,
		"fallback": "selfhst:erugo-dark",
	});
}

export default Component;
