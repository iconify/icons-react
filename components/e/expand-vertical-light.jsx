import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhk4w5u-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhk4w5u-t"/>`,
		"fallback": "stash:expand-vertical-light",
	});
}

export default Component;
