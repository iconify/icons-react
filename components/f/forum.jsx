import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4kr_xbtu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4kr_xbtu"/>`,
		"fallback": "fluent-mdl2:forum",
	});
}

export default Component;
