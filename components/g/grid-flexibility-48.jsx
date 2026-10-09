import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p860fxb3j.css';
import '../../css/i/igyv2ne6w.css';
import '../../css/o/o3ufdkm0c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p860fxb3j"/><path class="igyv2ne6w"/><path class="o3ufdkm0c"/>`,
		"fallback": "energy-icons:grid-flexibility-48",
	});
}

export default Component;
