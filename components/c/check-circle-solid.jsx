import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qva8gmbtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qva8gmbtq"/>`,
		"fallback": "stash:check-circle-solid",
	});
}

export default Component;
