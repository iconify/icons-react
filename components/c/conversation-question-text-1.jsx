import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btun33och.css';
import '../../css/e/evswpnqiu.css';
import '../../css/n/n8xi_5opn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btun33och"/><path class="evswpnqiu"/><path class="n8xi_5opn"/>`,
		"fallback": "streamline-freehand:conversation-question-text-1",
	});
}

export default Component;
