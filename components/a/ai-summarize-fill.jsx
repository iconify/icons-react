import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il3umbb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il3umbb2z"/>`,
		"fallback": "si:ai-summarize-fill",
	});
}

export default Component;
