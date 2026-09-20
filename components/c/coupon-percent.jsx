import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l1w39n6pb.css';
import '../../css/c/c3ezjvbfd.css';
import '../../css/b/bl8r-g21u.css';
import '../../css/h/h0t1mbbhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="l1w39n6pb"/><path class="c3ezjvbfd"/><path class="bl8r-g21u"/><path class="h0t1mbbhd"/></g>`,
		"fallback": "streamline-freehand-color:coupon-percent",
	});
}

export default Component;
