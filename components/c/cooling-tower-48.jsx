import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shh92ibos.css';
import '../../css/h/hw51tgbfe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shh92ibos"/><path class="hw51tgbfe"/>`,
		"fallback": "energy-icons:cooling-tower-48",
	});
}

export default Component;
