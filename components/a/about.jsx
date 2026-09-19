import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbv6r8omk.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/l/lzbjlqyni.css';
import '../../css/a/asp4yobns.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbv6r8omk"/><g class="n1mjunbsu"><path class="lzbjlqyni"/><circle class="asp4yobns"/></g>`,
		"fallback": "flat-color-icons:about",
	});
}

export default Component;
