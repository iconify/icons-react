import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrl_9-k9t.css';
import '../../css/j/ja9psewjq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrl_9-k9t"/><path class="ja9psewjq"/>`,
		"fallback": "famicons:file-tray-full",
	});
}

export default Component;
