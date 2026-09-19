import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/ghuwk6bys.css';
import '../../css/a/ahi4awbnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ghuwk6bys"/><path class="ahi4awbnp"/></g>`,
		"fallback": "hugeicons:calendar-upload-01",
	});
}

export default Component;
