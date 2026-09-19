import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezbfhcbuu.css';
import '../../css/a/a45l8jhyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-primary-layer ezbfhcbuu"/><path class="a45l8jhyb duoicon-secondary-layer"/>`,
		"fallback": "duo-icons:bell",
	});
}

export default Component;
