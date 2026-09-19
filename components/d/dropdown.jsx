import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uot15gzqk.css';
import '../../css/n/nf2tmmxki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uot15gzqk"/><path class="nf2tmmxki"/>`,
		"fallback": "boxicons:dropdown",
	});
}

export default Component;
