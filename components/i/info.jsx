import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rimzogy_d.css';
import '../../css/x/xkpcfdb4u.css';
import '../../css/h/hasg0ee8z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="rimzogy_d"/><path class="xkpcfdb4u"/><circle class="hasg0ee8z"/>`,
		"fallback": "flat-color-icons:info",
	});
}

export default Component;
