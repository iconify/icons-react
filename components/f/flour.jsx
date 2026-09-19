import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okq2mbbpy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okq2mbbpy"/>`,
		"fallback": "game-icons:flour",
	});
}

export default Component;
