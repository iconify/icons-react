import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd93lvb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jd93lvb4a"/>`,
		"fallback": "gg:arrow-long-left-r",
	});
}

export default Component;
