import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1egrjbgw.css';
import '../../css/d/drbq42kov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1egrjbgw"/><path class="drbq42kov"/>`,
		"fallback": "lineicons:basket-shopping-3",
	});
}

export default Component;
