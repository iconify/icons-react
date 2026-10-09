import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcwt57p0s.css';
import '../../css/x/xoykf8bsw.css';
import '../../css/q/qk7-h-neb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcwt57p0s"/><path class="xoykf8bsw"/><path class="qk7-h-neb"/>`,
		"fallback": "energy-icons:blade-recycling-48",
	});
}

export default Component;
