import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/a/aieg73b8w.css';
import '../../css/p/pkjm_57eg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path clip-rule="evenodd" class="aieg73b8w"/><path class="pkjm_57eg"/></g>`,
		"fallback": "icon-park:drop-shadow-right",
	});
}

export default Component;
