import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvz700bpw.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvz700bpw"/>`,
		"fallback": "garden:clock-in-fill-12",
	});
}

export default Component;
