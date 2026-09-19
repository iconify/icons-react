import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/hde0f9hoe.css';
import '../../css/j/jkfvpr2gm.css';
import '../../css/p/p9hlq3xpn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="hde0f9hoe"/><path class="jkfvpr2gm"/></g><circle class="p9hlq3xpn"/>`,
		"fallback": "garden:alert-error-stroke-16",
	});
}

export default Component;
