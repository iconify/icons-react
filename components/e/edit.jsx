import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/b/bwayl0bfz.css';
import '../../css/z/zfyobdlwe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="bwayl0bfz"/><path class="zfyobdlwe"/></g>`,
		"fallback": "icon-park:edit",
	});
}

export default Component;
