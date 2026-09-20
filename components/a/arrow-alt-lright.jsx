import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xywj-_bsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xywj-_bsk"/>`,
		"fallback": "lets-icons:arrow-alt-lright",
	});
}

export default Component;
