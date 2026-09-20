import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuc7ebrqa.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuc7ebrqa"/>`,
		"fallback": "maki:industry-15",
	});
}

export default Component;
