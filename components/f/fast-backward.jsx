import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxvqpxw-p.css';

const viewBox = {"width":24,"height":24,"left":-1,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxvqpxw-p"/>`,
		"fallback": "jam:fast-backward",
	});
}

export default Component;
