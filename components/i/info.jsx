import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wic510bop.css';
import '../../css/d/dpjsw5bva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer wic510bop"/><path class="dpjsw5bva duoicon-primary-layer"/>`,
		"fallback": "duo-icons:info",
	});
}

export default Component;
