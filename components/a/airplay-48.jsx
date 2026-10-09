import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agimoob8o.css';
import '../../css/m/m8c88eb6w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agimoob8o"/><path class="m8c88eb6w"/>`,
		"fallback": "energy-icons:airplay-48",
	});
}

export default Component;
