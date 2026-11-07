import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbi9b4b7j.css';
import '../../css/a/atape3b2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbi9b4b7j"/><path clip-rule="evenodd" class="atape3b2j"/>`,
		"fallback": "solar:banknote-bold",
	});
}

export default Component;
