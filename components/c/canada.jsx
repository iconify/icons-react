import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m__q8jbmq.css';
import '../../css/e/eft4hdbyl.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m__q8jbmq"/><path class="eft4hdbyl"/>`,
		"fallback": "tabler-flags:canada",
	});
}

export default Component;
