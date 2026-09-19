import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v67dzhjys.css';

const viewBox = {"width":334,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v67dzhjys"/>`,
		"fallback": "file-icons:brakeman",
	});
}

export default Component;
