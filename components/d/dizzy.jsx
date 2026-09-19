import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8ws9tb3s.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8ws9tb3s"/>`,
		"fallback": "fa-regular:dizzy",
	});
}

export default Component;
