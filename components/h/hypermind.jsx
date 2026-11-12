import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teozd_bzd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teozd_bzd"/>`,
		"fallback": "selfhst:hypermind",
	});
}

export default Component;
