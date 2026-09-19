import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/meu8qvatp.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="meu8qvatp"/>`,
		"fallback": "fa-regular:bell",
	});
}

export default Component;
