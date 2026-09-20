import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da9m5rt6q.css';
import '../../css/e/e3kxkcb7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da9m5rt6q"/><path class="e3kxkcb7s"/>`,
		"fallback": "stash:circle-dot-duotone",
	});
}

export default Component;
