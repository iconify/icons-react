import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/h/hgjak_-qz.css';
import '../../css/d/deeocfldx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="hgjak_-qz"/><path clip-rule="evenodd" class="deeocfldx"/></g>`,
		"fallback": "icon-park:hand-left",
	});
}

export default Component;
