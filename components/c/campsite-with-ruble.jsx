import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx0bnjbnk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx0bnjbnk"/>`,
		"fallback": "pinhead:campsite-with-ruble",
	});
}

export default Component;
