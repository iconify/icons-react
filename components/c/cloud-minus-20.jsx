import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjuk3kbct.css';
import '../../css/g/gr80gyb-f.css';
import '../../css/a/a--uzxbtp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjuk3kbct"/><path class="gr80gyb-f"/><path class="a--uzxbtp"/>`,
		"fallback": "energy-icons:cloud-minus-20",
	});
}

export default Component;
