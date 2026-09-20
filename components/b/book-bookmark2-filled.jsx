import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3z_ju9sd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3z_ju9sd"/>`,
		"fallback": "reicon:book-bookmark2-filled",
	});
}

export default Component;
