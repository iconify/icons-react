import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nogaml5-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nogaml5-l"/>`,
		"fallback": "coolicons:factory-fill-round",
	});
}

export default Component;
