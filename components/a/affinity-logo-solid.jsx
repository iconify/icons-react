import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b86j1lb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b86j1lb-d"/>`,
		"fallback": "streamline-logos:affinity-logo-solid",
	});
}

export default Component;
