import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc4ch3rjw.css';
import '../../css/j/jczmvvbsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc4ch3rjw"/><path class="jczmvvbsl"/>`,
		"fallback": "boxicons:burger-alt",
	});
}

export default Component;
