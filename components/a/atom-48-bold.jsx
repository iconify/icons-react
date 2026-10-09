import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tptd5ygch.css';
import '../../css/i/iklw8pg9o.css';
import '../../css/r/r2a1kcczy.css';
import '../../css/b/b0a2wmopo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tptd5ygch"/><path class="iklw8pg9o"/><path class="r2a1kcczy"/><path class="b0a2wmopo"/>`,
		"fallback": "energy-icons:atom-48-bold",
	});
}

export default Component;
