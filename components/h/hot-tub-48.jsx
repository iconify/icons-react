import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egi8qzduf.css';
import '../../css/t/tly4pwr5p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egi8qzduf"/><path class="tly4pwr5p"/>`,
		"fallback": "energy-icons:hot-tub-48",
	});
}

export default Component;
