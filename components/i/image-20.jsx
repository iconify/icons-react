import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wetq5b_1u.css';
import '../../css/y/ysix8mbgg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wetq5b_1u"/><path class="ysix8mbgg"/>`,
		"fallback": "energy-icons:image-20",
	});
}

export default Component;
