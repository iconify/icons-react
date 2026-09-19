import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv4j13o_i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rv4j13o_i"/>`,
		"fallback": "gravity-ui:clock-fill",
	});
}

export default Component;
