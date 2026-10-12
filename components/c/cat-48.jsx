import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozo7glmpq.css';
import '../../css/s/svf74obkf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozo7glmpq"/><path class="svf74obkf"/>`,
		"fallback": "energy-icons:cat-48",
	});
}

export default Component;
