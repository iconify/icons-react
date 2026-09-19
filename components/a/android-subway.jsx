import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxx8ae6fm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxx8ae6fm"/>`,
		"fallback": "ion:android-subway",
	});
}

export default Component;
