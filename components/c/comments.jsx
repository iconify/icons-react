import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqnw9gbzk.css';
import '../../css/v/vzxnh3iad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqnw9gbzk"/><path class="vzxnh3iad"/>`,
		"fallback": "prime:comments",
	});
}

export default Component;
