import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyor_thbf.css';
import '../../css/p/psi0ttbxr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="oyor_thbf"/><path class="psi0ttbxr"/>`,
		"fallback": "dashicons:car",
	});
}

export default Component;
