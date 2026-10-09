import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9t00gb6u.css';
import '../../css/f/fqwpfx1sz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9t00gb6u"/><path class="fqwpfx1sz"/>`,
		"fallback": "energy-icons:arrow-right-48",
	});
}

export default Component;
