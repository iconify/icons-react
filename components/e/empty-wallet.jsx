import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gl7s6cbtg.css';
import '../../css/t/ttwa5ubjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gl7s6cbtg"/><path class="ttwa5ubjw"/></g>`,
		"fallback": "reicon:empty-wallet",
	});
}

export default Component;
