import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y153yih8p.css';
import '../../css/l/lxgy0sctt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y153yih8p"/><path class="lxgy0sctt"/>`,
		"fallback": "energy-icons:face-mask-48",
	});
}

export default Component;
