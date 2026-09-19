import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv_kw0bne.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv_kw0bne"/>`,
		"fallback": "game-icons:checkered-diamond",
	});
}

export default Component;
