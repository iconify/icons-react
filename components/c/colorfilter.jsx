import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hftl6jqgd.css';
import '../../css/p/pqjz-tb5y.css';
import '../../css/a/avtw3ccyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hftl6jqgd"/><path class="pqjz-tb5y"/><path class="avtw3ccyz"/></g>`,
		"fallback": "reicon:colorfilter",
	});
}

export default Component;
