import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzo6b5oqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzo6b5oqu"/>`,
		"fallback": "heroicons:code-bracket",
	});
}

export default Component;
