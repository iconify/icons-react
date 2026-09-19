import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/p/ppdb4gx7a.css';
import '../../css/s/svrwyvbrs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="ppdb4gx7a"/><path class="svrwyvbrs"/></g>`,
		"fallback": "icon-park:chart-line-area",
	});
}

export default Component;
