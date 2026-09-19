import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0u3hz8wh.css';

const viewBox = {"width":264,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0u3hz8wh"/>`,
		"fallback": "ps:goodreads",
	});
}

export default Component;
