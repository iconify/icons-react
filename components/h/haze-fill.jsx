import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecc9xbbqc.css';
import '../../css/m/mmxphf4-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecc9xbbqc"/><path clip-rule="evenodd" class="mmxphf4-j"/>`,
		"fallback": "mingcute:haze-fill",
	});
}

export default Component;
