import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0d-k9bod.css';
import '../../css/i/iuszqrjvz.css';
import '../../css/q/qz4brhaoj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0d-k9bod"/><path class="iuszqrjvz"/><path class="qz4brhaoj"/>`,
		"fallback": "energy-icons:house-alert-20",
	});
}

export default Component;
