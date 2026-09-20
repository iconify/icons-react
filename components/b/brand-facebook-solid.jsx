import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhmruf79x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhmruf79x"/>`,
		"fallback": "mynaui:brand-facebook-solid",
	});
}

export default Component;
