import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw8eq6qnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw8eq6qnu"/>`,
		"fallback": "simple-icons:coreldraw",
	});
}

export default Component;
