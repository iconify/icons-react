import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j6o7377jw.css';
import '../../css/z/zilprabad.css';
import '../../css/g/gujnf0u8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j6o7377jw"/><path class="zilprabad"/><path class="gujnf0u8z"/></g>`,
		"fallback": "iconoir:drag-hand-gesture",
	});
}

export default Component;
