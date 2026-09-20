import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt_d2pbbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt_d2pbbt"/>`,
		"fallback": "tdesign:backtop",
	});
}

export default Component;
