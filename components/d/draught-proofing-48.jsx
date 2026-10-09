import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxik2jbrv.css';
import '../../css/b/b4orwhbsl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxik2jbrv"/><path class="b4orwhbsl"/>`,
		"fallback": "energy-icons:draught-proofing-48",
	});
}

export default Component;
