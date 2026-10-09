import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2neunb3u.css';
import '../../css/j/jmdm-58ef.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2neunb3u"/><path class="jmdm-58ef"/>`,
		"fallback": "energy-icons:clock-9-48-bold",
	});
}

export default Component;
