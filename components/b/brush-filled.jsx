import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqww9gawq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqww9gawq"/>`,
		"fallback": "reicon:brush-filled",
	});
}

export default Component;
