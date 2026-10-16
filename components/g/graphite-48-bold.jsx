import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0ufn5uvh.css';
import '../../css/v/vzgpo4bbf.css';
import '../../css/f/fkhpo-beq.css';
import '../../css/h/h6-77x89f.css';
import '../../css/j/jplqt0prm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0ufn5uvh"/><path class="vzgpo4bbf"/><path class="fkhpo-beq"/><path class="h6-77x89f"/><path class="jplqt0prm"/>`,
		"fallback": "energy-icons:graphite-48-bold",
	});
}

export default Component;
