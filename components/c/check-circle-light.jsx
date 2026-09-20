import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z--u7bblr.css';
import '../../css/i/ivxllx4mf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z--u7bblr"/><path class="ivxllx4mf"/>`,
		"fallback": "stash:check-circle-light",
	});
}

export default Component;
