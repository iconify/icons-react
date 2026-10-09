import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyts_6b4x.css';
import '../../css/f/fu4k6tlst.css';
import '../../css/x/xpbh4hvld.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyts_6b4x"/><path class="fu4k6tlst"/><path class="xpbh4hvld"/>`,
		"fallback": "energy-icons:blueprint-48-bold",
	});
}

export default Component;
