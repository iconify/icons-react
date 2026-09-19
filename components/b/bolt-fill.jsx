import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4ldf9bao.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4ldf9bao"/>`,
		"fallback": "f7:bolt-fill",
	});
}

export default Component;
