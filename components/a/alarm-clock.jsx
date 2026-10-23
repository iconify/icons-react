import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/qhyii4brw.css';
import '../../css/p/ppbdtfbyp.css';
import '../../css/u/ukce0gr5b.css';
import '../../css/v/vluk53bvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="qhyii4brw"/><path class="ppbdtfbyp"/><path class="ukce0gr5b"/><path class="vluk53bvz"/></g>`,
		"fallback": "matita:alarm-clock",
	});
}

export default Component;
