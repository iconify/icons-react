import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8pzxccdr.css';
import '../../css/r/rinqinbgr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8pzxccdr"/><path class="rinqinbgr"/>`,
		"fallback": "energy-icons:bathtub-48-bold",
	});
}

export default Component;
