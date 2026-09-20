import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja86lubud.css';
import '../../css/s/s78ya2efd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja86lubud"/><path class="s78ya2efd"/>`,
		"fallback": "uim:comment-alt-message",
	});
}

export default Component;
