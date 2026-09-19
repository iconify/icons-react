import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/sjiinyb7i.css';
import '../../css/f/fqpw50u9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="sjiinyb7i"/><path class="fqpw50u9p"/></g>`,
		"fallback": "hugeicons:cupcake-02",
	});
}

export default Component;
