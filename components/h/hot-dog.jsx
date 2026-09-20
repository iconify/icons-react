import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wc9fc7_-j.css';
import '../../css/b/brlcsz9kw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wc9fc7_-j"/><path class="brlcsz9kw"/></g>`,
		"fallback": "lucide-lab:hot-dog",
	});
}

export default Component;
