import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/j/jcxlm2b2l.css';
import '../../css/k/kvhr17bhl.css';
import '../../css/f/ftoe0cc3c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="jcxlm2b2l"/><path class="kvhr17bhl"/><path class="ftoe0cc3c"/></g>`,
		"fallback": "icon-park:file-txt",
	});
}

export default Component;
