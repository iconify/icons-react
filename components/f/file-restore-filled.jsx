import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lju9ghrlq.css';
import '../../css/c/cbrxaibgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lju9ghrlq"/><path class="cbrxaibgg"/>`,
		"fallback": "tdesign:file-restore-filled",
	});
}

export default Component;
