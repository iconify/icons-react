import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbd13vizc.css';
import '../../css/i/imtkfjwmd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbd13vizc"/><path class="imtkfjwmd"/>`,
		"fallback": "energy-icons:drilling-rig-20",
	});
}

export default Component;
