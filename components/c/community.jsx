import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvo_y9b8a.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvo_y9b8a"/>`,
		"fallback": "whh:community",
	});
}

export default Component;
