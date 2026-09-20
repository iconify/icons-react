import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqus3ibdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bqus3ibdh"/>`,
		"fallback": "streamline-sharp:desktop-chat-solid",
	});
}

export default Component;
