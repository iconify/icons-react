import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi9ki3f1j.css';
import '../../css/e/ek0sa8bcv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi9ki3f1j"/><path class="ek0sa8bcv"/>`,
		"fallback": "energy-icons:humidifier-20-bold",
	});
}

export default Component;
