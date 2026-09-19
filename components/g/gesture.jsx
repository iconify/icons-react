import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2xfhibki.css';

const viewBox = {"width":392,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2xfhibki"/>`,
		"fallback": "zmdi:gesture",
	});
}

export default Component;
