import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/imaf3zb1o.css';
import '../../css/o/ohg80ks9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="imaf3zb1o"/><path class="ohg80ks9u"/></g>`,
		"fallback": "mage:delivery-truck",
	});
}

export default Component;
