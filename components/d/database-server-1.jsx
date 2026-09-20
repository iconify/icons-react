import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nd42ubcwx.css';
import '../../css/z/zx5wzmbhm.css';
import '../../css/u/uy4-h-b6o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nd42ubcwx"/><path class="zx5wzmbhm"/><path class="uy4-h-b6o"/></g>`,
		"fallback": "streamline:database-server-1",
	});
}

export default Component;
