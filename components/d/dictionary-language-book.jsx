import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x2okoeb6p.css';
import '../../css/q/qagv3qb5w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="x2okoeb6p"/><path class="qagv3qb5w"/></g>`,
		"fallback": "streamline:dictionary-language-book",
	});
}

export default Component;
