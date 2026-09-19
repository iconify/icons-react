import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm8ug-bhq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm8ug-bhq"/>`,
		"fallback": "famicons:glasses-outline",
	});
}

export default Component;
