import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ari2fzn1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ari2fzn1x"/>`,
		"fallback": "mingcute:film-line",
	});
}

export default Component;
