import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvggpac7z.css';
import '../../css/v/vt4p30p5y.css';
import '../../css/w/w9q5sgb9g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvggpac7z"/><path class="vt4p30p5y"/><path class="w9q5sgb9g"/>`,
		"fallback": "energy-icons:house-hydrogen-48",
	});
}

export default Component;
