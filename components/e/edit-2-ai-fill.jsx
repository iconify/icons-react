import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bes95g4qn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bes95g4qn"/>`,
		"fallback": "mingcute:edit-2-ai-fill",
	});
}

export default Component;
