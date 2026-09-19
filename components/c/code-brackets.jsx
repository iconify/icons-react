import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg3g5pbsn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg3g5pbsn"/>`,
		"fallback": "icon-park-outline:code-brackets",
	});
}

export default Component;
