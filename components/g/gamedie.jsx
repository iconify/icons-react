import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0ojfxbrx.css';
import '../../css/a/akenjqb-m.css';
import '../../css/a/a7ah0vuxn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0ojfxbrx"/><path class="akenjqb-m"/><path class="a7ah0vuxn"/>`,
		"fallback": "fxemoji:gamedie",
	});
}

export default Component;
