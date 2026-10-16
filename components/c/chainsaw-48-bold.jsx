import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p72eivapz.css';
import '../../css/t/tbo-rh1-d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p72eivapz"/><path class="tbo-rh1-d"/>`,
		"fallback": "energy-icons:chainsaw-48-bold",
	});
}

export default Component;
