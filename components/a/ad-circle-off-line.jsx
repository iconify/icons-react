import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2j_krb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2j_krb0y"/>`,
		"fallback": "mingcute:ad-circle-off-line",
	});
}

export default Component;
