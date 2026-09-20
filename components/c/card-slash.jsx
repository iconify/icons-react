import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ock46ut8j.css';
import '../../css/k/kdcemgo2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ock46ut8j"/><path class="kdcemgo2i"/></g>`,
		"fallback": "reicon:card-slash",
	});
}

export default Component;
