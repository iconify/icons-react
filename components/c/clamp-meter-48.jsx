import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muwzxbc8x.css';
import '../../css/o/okfg1bcol.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muwzxbc8x"/><path class="okfg1bcol"/>`,
		"fallback": "energy-icons:clamp-meter-48",
	});
}

export default Component;
