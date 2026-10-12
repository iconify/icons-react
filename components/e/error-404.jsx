import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hul7i_n9v.css';
import '../../css/b/b9gv6hg8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hul7i_n9v"/><rect class="b9gv6hg8z"/></g>`,
		"fallback": "andrsrxn:error-404",
	});
}

export default Component;
