import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yk89cv11i.css';
import '../../css/p/pzv8ok-ff.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="yk89cv11i"/><path class="pzv8ok-ff"/></g>`,
		"fallback": "cryptocurrency-color:ae",
	});
}

export default Component;
