import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxbfs7m-k.css';
import '../../css/m/m2anmnf8b.css';
import '../../css/d/d27j7obsk.css';
import '../../css/p/p34gu6lai.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxbfs7m-k"/><path class="m2anmnf8b"/><path class="d27j7obsk"/><path class="p34gu6lai"/>`,
		"fallback": "energy-icons:ev-charger-off-48-bold",
	});
}

export default Component;
