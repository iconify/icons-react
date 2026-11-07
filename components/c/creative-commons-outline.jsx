import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phsuvkn8h.css';
import '../../css/x/xglk9bcox.css';
import '../../css/k/k_haes9zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phsuvkn8h"/><path class="xglk9bcox"/><path clip-rule="evenodd" class="k_haes9zn"/>`,
		"fallback": "solar:creative-commons-outline",
	});
}

export default Component;
