import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu_991baa.css';
import '../../css/x/xrwz_e-ja.css';
import '../../css/z/z-vgfuljg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iu_991baa"/><path class="xrwz_e-ja"/><path class="z-vgfuljg"/>`,
		"fallback": "solar:cloud-sun-2-bold",
	});
}

export default Component;
