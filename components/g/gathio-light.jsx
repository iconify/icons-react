import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9ywkvrys.css';
import '../../css/y/ybd0ybb7y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9ywkvrys"/><path class="ybd0ybb7y"/>`,
		"fallback": "selfhst:gathio-light",
	});
}

export default Component;
