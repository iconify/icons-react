import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6c7rh25t.css';
import '../../css/r/roygfgbrg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6c7rh25t"/><path class="roygfgbrg"/>`,
		"fallback": "energy-icons:coupling-48",
	});
}

export default Component;
