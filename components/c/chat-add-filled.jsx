import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaukvj20g.css';
import '../../css/b/b0-egysls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zaukvj20g"/><path class="b0-egysls"/>`,
		"fallback": "tdesign:chat-add-filled",
	});
}

export default Component;
