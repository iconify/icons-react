import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajch12nad.css';
import '../../css/p/pi81u0bva.css';
import '../../css/x/x_6yldbeu.css';
import '../../css/b/bdkl8-dne.css';
import '../../css/j/j3cy-fbyb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajch12nad"/><path class="pi81u0bva"/><path class="x_6yldbeu"/><path class="bdkl8-dne"/><path class="j3cy-fbyb"/>`,
		"fallback": "energy-icons:house-battery-x-48",
	});
}

export default Component;
