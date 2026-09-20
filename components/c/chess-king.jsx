import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pk2dj7b8n.css';
import '../../css/d/d9iih56zc.css';
import '../../css/l/lmlsjm30a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pk2dj7b8n"/><path clip-rule="evenodd" class="d9iih56zc"/><path class="lmlsjm30a"/></g>`,
		"fallback": "streamline-flex:chess-king",
	});
}

export default Component;
