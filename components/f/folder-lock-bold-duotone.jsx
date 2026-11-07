import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2nrf10bf.css';
import '../../css/q/qzz58bb5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2nrf10bf"/><path clip-rule="evenodd" class="qzz58bb5a"/>`,
		"fallback": "solar:folder-lock-bold-duotone",
	});
}

export default Component;
