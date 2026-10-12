import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajch12nad.css';
import '../../css/p/pi81u0bva.css';
import '../../css/x/x_6yldbeu.css';
import '../../css/i/ikpbwe38b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajch12nad"/><path class="pi81u0bva"/><path class="x_6yldbeu"/><path class="ikpbwe38b"/>`,
		"fallback": "energy-icons:house-battery-alert-48",
	});
}

export default Component;
