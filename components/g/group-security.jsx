import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9hn6abln.css';
import '../../css/n/nsui017pl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9hn6abln"/><path class="nsui017pl"/>`,
		"fallback": "carbon:group-security",
	});
}

export default Component;
