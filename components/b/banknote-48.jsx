import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shgfqubvu.css';
import '../../css/b/b101e8_sq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shgfqubvu"/><path class="b101e8_sq"/>`,
		"fallback": "energy-icons:banknote-48",
	});
}

export default Component;
