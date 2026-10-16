import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gysr-mb2g.css';
import '../../css/c/cnwa92bez.css';
import '../../css/l/l1i-32b5o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gysr-mb2g"/><path class="cnwa92bez"/><path class="l1i-32b5o"/>`,
		"fallback": "energy-icons:chassis-ground-48-bold",
	});
}

export default Component;
