import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i96wvdbsz.css';
import '../../css/w/won8re7ls.css';
import '../../css/k/krrh_9bjq.css';
import '../../css/x/xkyhbub-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i96wvdbsz"/><path clip-rule="evenodd" class="won8re7ls"/><path clip-rule="evenodd" class="krrh_9bjq"/><path class="xkyhbub-b"/>`,
		"fallback": "solar:chart-2-outline",
	});
}

export default Component;
