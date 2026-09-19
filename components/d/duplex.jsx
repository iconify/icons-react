import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/osd40dbuo.css';
import '../../css/r/rz636hxgh.css';
import '../../css/j/jf0065b9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="osd40dbuo"/><path class="rz636hxgh"/><path class="jf0065b9d"/></g>`,
		"fallback": "hugeicons:duplex",
	});
}

export default Component;
