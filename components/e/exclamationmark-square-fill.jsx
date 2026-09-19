import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab2onr1te.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab2onr1te"/>`,
		"fallback": "f7:exclamationmark-square-fill",
	});
}

export default Component;
