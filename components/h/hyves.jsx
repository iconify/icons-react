import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch575kbtn.css';

const viewBox = {"width":384,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch575kbtn"/>`,
		"fallback": "ps:hyves",
	});
}

export default Component;
