import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3bcjsagj.css';
import '../../css/g/gx0yaobvf.css';
import '../../css/p/p6j-kgamt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3bcjsagj"/><path class="gx0yaobvf"/><path class="p6j-kgamt"/>`,
		"fallback": "energy-icons:first-aid-48",
	});
}

export default Component;
