import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/st73rhb9v.css';
import '../../css/o/oyz7n0e7y.css';
import '../../css/q/qlu55sb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="st73rhb9v"/><rect class="oyz7n0e7y"/><rect class="qlu55sb1s"/></g>`,
		"fallback": "andrsrxn:error-400",
	});
}

export default Component;
