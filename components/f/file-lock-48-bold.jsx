import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frd-8-btx.css';
import '../../css/p/p9big2yaj.css';
import '../../css/u/uir1vq-bm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frd-8-btx"/><path class="p9big2yaj"/><path class="uir1vq-bm"/>`,
		"fallback": "energy-icons:file-lock-48-bold",
	});
}

export default Component;
