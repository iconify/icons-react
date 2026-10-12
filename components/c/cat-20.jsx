import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os3wfcb2g.css';
import '../../css/d/duhv4jbxn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="os3wfcb2g"/><path class="duhv4jbxn"/>`,
		"fallback": "energy-icons:cat-20",
	});
}

export default Component;
