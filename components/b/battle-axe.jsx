import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_914pbkq.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_914pbkq"/>`,
		"fallback": "memory:battle-axe",
	});
}

export default Component;
