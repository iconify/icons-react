import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co9i-9-pl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co9i-9-pl"/>`,
		"fallback": "coolicons:circle-fill-round",
	});
}

export default Component;
