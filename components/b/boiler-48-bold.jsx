import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zanasbbem.css';
import '../../css/i/iqca1hbvw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zanasbbem"/><path class="iqca1hbvw"/>`,
		"fallback": "energy-icons:boiler-48-bold",
	});
}

export default Component;
