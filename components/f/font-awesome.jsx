import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obj4ptb6w.css';

const viewBox = {"width":1504,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obj4ptb6w"/>`,
		"fallback": "fa:font-awesome",
	});
}

export default Component;
