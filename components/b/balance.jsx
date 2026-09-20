import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chowghc9o.css';
import '../../css/i/iuef7db3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chowghc9o"/><path class="iuef7db3c"/>`,
		"fallback": "stash:balance",
	});
}

export default Component;
