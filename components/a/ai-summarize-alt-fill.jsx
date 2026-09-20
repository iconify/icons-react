import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw8y06qco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw8y06qco"/>`,
		"fallback": "si:ai-summarize-alt-fill",
	});
}

export default Component;
