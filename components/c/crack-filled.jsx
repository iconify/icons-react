import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttalljb2j.css';
import '../../css/p/p_n9afb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttalljb2j"/><path class="p_n9afb0x"/>`,
		"fallback": "tdesign:crack-filled",
	});
}

export default Component;
