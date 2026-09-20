import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aghg-24qw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aghg-24qw"/>`,
		"fallback": "la:hat-cowboy",
	});
}

export default Component;
