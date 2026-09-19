import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3o6v3kfg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3o6v3kfg"/>`,
		"fallback": "cil:asterisk",
	});
}

export default Component;
