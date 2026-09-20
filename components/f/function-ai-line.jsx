import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhc-xmblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhc-xmblw"/>`,
		"fallback": "ri:function-ai-line",
	});
}

export default Component;
