import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7kugr3av.css';
import '../../css/b/bqdx-xuwb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7kugr3av"/><path class="bqdx-xuwb"/>`,
		"fallback": "energy-icons:award-48",
	});
}

export default Component;
