import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsdozl7jt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsdozl7jt"/>`,
		"fallback": "coolicons:external-link-fill-round",
	});
}

export default Component;
