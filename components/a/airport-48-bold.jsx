import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa81hmtbv.css';
import '../../css/i/ik6s6dbfj.css';
import '../../css/n/n3iczmbsl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa81hmtbv"/><path class="ik6s6dbfj"/><path class="n3iczmbsl"/>`,
		"fallback": "energy-icons:airport-48-bold",
	});
}

export default Component;
