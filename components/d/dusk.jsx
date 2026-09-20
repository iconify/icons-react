import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j77rxjbqw.css';
import '../../css/n/n_ffh9buk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j77rxjbqw"/><path class="n_ffh9buk"/>`,
		"fallback": "token:dusk",
	});
}

export default Component;
