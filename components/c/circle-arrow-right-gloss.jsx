import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjefz4hqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjefz4hqg"/>`,
		"fallback": "withicons:circle-arrow-right-gloss",
	});
}

export default Component;
