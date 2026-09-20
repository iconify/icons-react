import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqax-6b-d.css';
import '../../css/y/y-l0-obsm.css';
import '../../css/w/wbwjg0iif.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jqax-6b-d"><path class="y-l0-obsm"/><path class="wbwjg0iif"/></g>`,
		"fallback": "streamline-plump:box-waterproof",
	});
}

export default Component;
