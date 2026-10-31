import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aemn-9ejj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aemn-9ejj"/>`,
		"fallback": "coolicons:fast-forward-fill-round",
	});
}

export default Component;
