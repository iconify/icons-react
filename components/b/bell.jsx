import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h95qwns3s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h95qwns3s"/>`,
		"fallback": "pinhead:bell",
	});
}

export default Component;
