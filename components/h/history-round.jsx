import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk78tqloq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk78tqloq"/>`,
		"fallback": "coolicons:history-round",
	});
}

export default Component;
