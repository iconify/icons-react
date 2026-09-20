import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvu91_p7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvu91_p7t"/>`,
		"fallback": "thesvg-color:conan",
	});
}

export default Component;
