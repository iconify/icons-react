import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxb_lrbya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxb_lrbya"/>`,
		"fallback": "tabler:align-box-center-bottom",
	});
}

export default Component;
