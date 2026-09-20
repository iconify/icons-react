import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym2po6bfu.css';
import '../../css/g/g_ffjxz3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym2po6bfu"/><path class="g_ffjxz3n"/>`,
		"fallback": "tdesign:chat-setting-filled",
	});
}

export default Component;
