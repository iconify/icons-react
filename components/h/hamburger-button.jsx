import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/od8jeie2e.css';
import '../../css/w/w0sf9rb7l.css';
import '../../css/g/g0yq44bbv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="od8jeie2e"/><path class="w0sf9rb7l"/><path class="g0yq44bbv"/></g>`,
		"fallback": "icon-park:hamburger-button",
	});
}

export default Component;
