import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgi-m3bfu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgi-m3bfu"/>`,
		"fallback": "icon-park-outline:align-text-left",
	});
}

export default Component;
