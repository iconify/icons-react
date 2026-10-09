import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsaiwdb4t.css';
import '../../css/b/bwry4rblx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsaiwdb4t"/><path class="bwry4rblx"/>`,
		"fallback": "energy-icons:dining-48",
	});
}

export default Component;
