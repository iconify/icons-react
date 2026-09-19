import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/a/aym_ncbha.css';
import '../../css/j/jh9i8zb2v.css';
import '../../css/z/zqtd9-8hz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="aym_ncbha"/><path class="jh9i8zb2v"/><path class="zqtd9-8hz"/></g>`,
		"fallback": "icon-park-outline:install",
	});
}

export default Component;
