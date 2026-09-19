import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qilianfni.css';
import '../../css/c/clmuyw1-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qilianfni"/><path class="clmuyw1-n"/>`,
		"fallback": "boxicons:face-alt-4-filled",
	});
}

export default Component;
