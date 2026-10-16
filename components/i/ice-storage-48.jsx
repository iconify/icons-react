import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie-wxdblp.css';
import '../../css/e/ewoso7beo.css';
import '../../css/w/wabkd6bsw.css';
import '../../css/j/jwu10ccso.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie-wxdblp"/><path class="ewoso7beo"/><path class="wabkd6bsw"/><path class="jwu10ccso"/>`,
		"fallback": "energy-icons:ice-storage-48",
	});
}

export default Component;
