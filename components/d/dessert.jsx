import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iap_x96bz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iap_x96bz"/>`,
		"fallback": "vadivam:dessert",
	});
}

export default Component;
