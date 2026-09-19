import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzedyzb9o.css';
import '../../css/o/o2d3vabmu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzedyzb9o"/><path class="o2d3vabmu"/>`,
		"fallback": "cil:description",
	});
}

export default Component;
