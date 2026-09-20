import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tvkebjb9w.css';
import '../../css/w/w6crtkbrj.css';
import '../../css/d/d351sz2ia.css';
import '../../css/a/a9al5sbpc.css';
import '../../css/e/eq1_gxbno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tvkebjb9w"/><path class="w6crtkbrj"/><path class="d351sz2ia"/><path class="a9al5sbpc"/><path class="eq1_gxbno"/></g>`,
		"fallback": "streamline-freehand-color:coupon-cut",
	});
}

export default Component;
