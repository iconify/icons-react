import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k3i7azb7p.css';
import '../../css/a/a1zpv_jya.css';
import '../../css/m/mbds8lbzx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="k3i7azb7p"/><path class="a1zpv_jya"/><path class="mbds8lbzx"/></g>`,
		"fallback": "streamline:arrow-reload-horizontal-1",
	});
}

export default Component;
