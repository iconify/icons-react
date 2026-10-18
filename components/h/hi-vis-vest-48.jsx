import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkegzz3bi.css';
import '../../css/h/h07j5abjx.css';
import '../../css/w/ws21njb2r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkegzz3bi"/><path class="h07j5abjx"/><path class="ws21njb2r"/>`,
		"fallback": "energy-icons:hi-vis-vest-48",
	});
}

export default Component;
