import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/q/qcw-5lx-p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="qcw-5lx-p"/>`,
		"fallback": "energy-icons:compass-48",
	});
}

export default Component;
