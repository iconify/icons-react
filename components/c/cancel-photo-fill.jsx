import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guoh-hbsb.css';
import '../../css/j/jjbqhzpum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="guoh-hbsb"/><path class="jjbqhzpum"/>`,
		"fallback": "si:cancel-photo-fill",
	});
}

export default Component;
