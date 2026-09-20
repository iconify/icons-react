import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjhnb3boq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjhnb3boq"/>`,
		"fallback": "mdi:account-multiple-minus",
	});
}

export default Component;
