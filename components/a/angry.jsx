import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/z/zk7ympqlg.css';
import '../../css/g/gmdedcz7v.css';
import '../../css/e/e7ni4pbwh.css';
import '../../css/v/vht-czbwo.css';
import '../../css/h/h7t1avmuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="zk7ympqlg"/><path class="gmdedcz7v"/><path class="e7ni4pbwh"/><path class="vht-czbwo"/><path class="h7t1avmuy"/></g>`,
		"fallback": "matita:angry",
	});
}

export default Component;
