import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlmscut1c.css';
import '../../css/s/sx9ljtq-t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlmscut1c"/><path class="sx9ljtq-t"/>`,
		"fallback": "cil:audio",
	});
}

export default Component;
