import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tgf1fixwx.css';
import '../../css/d/d26v317vg.css';
import '../../css/i/iyugarbgj.css';
import '../../css/k/ku63a9bkq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="tgf1fixwx"/><g class="d26v317vg"><path class="iyugarbgj"/><path class="ku63a9bkq"/></g></g>`,
		"fallback": "cryptocurrency-color:dtr",
	});
}

export default Component;
