import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry85_ib5t.css';
import '../../css/g/g7joh4_lt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry85_ib5t"/><path class="g7joh4_lt"/>`,
		"fallback": "energy-icons:flag-48",
	});
}

export default Component;
