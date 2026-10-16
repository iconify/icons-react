import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajqks0bek.css';
import '../../css/d/d7497htpz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajqks0bek"/><path class="d7497htpz"/>`,
		"fallback": "energy-icons:book-marked-48",
	});
}

export default Component;
