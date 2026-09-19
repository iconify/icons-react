import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bl67wbcxm.css';
import '../../css/f/fh78z0blc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="bl67wbcxm"/><path class="fh78z0blc"/></g>`,
		"fallback": "cryptocurrency-color:emc",
	});
}

export default Component;
