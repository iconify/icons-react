import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0wv7wb3z.css';
import '../../css/e/epk77cclf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0wv7wb3z"/><path class="epk77cclf"/>`,
		"fallback": "energy-icons:a-frame-48",
	});
}

export default Component;
