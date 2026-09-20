import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfgdjs2-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfgdjs2-h"/>`,
		"fallback": "si:ai-summarize-duotone",
	});
}

export default Component;
