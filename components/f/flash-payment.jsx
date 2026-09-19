import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/j/j657_1wqq.css';
import '../../css/o/o5g359bjg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGopdtwbIm"><g class="hv130ab-t"><path class="j657_1wqq"/><path class="o5g359bjg"/></g></mask></defs><path mask="url(#SVGopdtwbIm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:flash-payment",
	});
}

export default Component;
