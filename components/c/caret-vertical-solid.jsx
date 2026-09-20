import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4l_n6szq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4l_n6szq"/>`,
		"fallback": "teenyicons:caret-vertical-solid",
	});
}

export default Component;
