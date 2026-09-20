import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pat_cd9rj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pat_cd9rj"/>`,
		"fallback": "ix:editor-guide-lines-magnet",
	});
}

export default Component;
