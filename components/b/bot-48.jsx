import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0e__ebzz.css';
import '../../css/e/ejsf3nw9l.css';
import '../../css/g/ggo40objl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0e__ebzz"/><path class="ejsf3nw9l"/><path class="ggo40objl"/>`,
		"fallback": "energy-icons:bot-48",
	});
}

export default Component;
