import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh78pcczw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh78pcczw"/>`,
		"fallback": "energy-icons:acid-rain-48-bold",
	});
}

export default Component;
