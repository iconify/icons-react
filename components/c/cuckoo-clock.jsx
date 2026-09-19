import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfah03bbi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfah03bbi"/>`,
		"fallback": "game-icons:cuckoo-clock",
	});
}

export default Component;
