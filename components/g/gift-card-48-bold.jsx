import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8314acox.css';
import '../../css/j/jk0_mdbae.css';
import '../../css/d/d55bptbbz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8314acox"/><path class="jk0_mdbae"/><path class="d55bptbbz"/>`,
		"fallback": "energy-icons:gift-card-48-bold",
	});
}

export default Component;
