import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i293nwooy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i293nwooy"/>`,
		"fallback": "icon-park-solid:difference-set",
	});
}

export default Component;
