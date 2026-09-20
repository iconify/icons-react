import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/egg9c6b9i.css';
import '../../css/s/saek4wbwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="egg9c6b9i"/><path class="saek4wbwh"/></g>`,
		"fallback": "reicon:directbox-receive",
	});
}

export default Component;
