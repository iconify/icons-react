import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btx7j3qro.css';
import '../../css/l/l_uqpac8o.css';
import '../../css/q/qwjmiebxi.css';
import '../../css/f/fqv6mgkqk.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btx7j3qro"/><path class="l_uqpac8o"/><path class="qwjmiebxi"/><path class="fqv6mgkqk"/>`,
		"fallback": "formkit:fileaudio",
	});
}

export default Component;
