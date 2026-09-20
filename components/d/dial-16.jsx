import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de5mf_2cl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de5mf_2cl"/>`,
		"fallback": "qlementine-icons:dial-16",
	});
}

export default Component;
