import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxt1u-fiz.css';
import '../../css/q/qoxo-5byh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxt1u-fiz"/><path class="qoxo-5byh"/>`,
		"fallback": "qlementine-icons:guitar-classical-24",
	});
}

export default Component;
