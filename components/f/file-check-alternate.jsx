import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/ya2vctb3m.css';
import '../../css/y/yj0zjxcdd.css';
import '../../css/m/m-q6fmbgd.css';
import '../../css/p/pj_8gbb3b.css';
import '../../css/d/d5p6fnbxf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ya2vctb3m"/><path class="yj0zjxcdd"/><path class="m-q6fmbgd"/><path class="pj_8gbb3b"/><path class="d5p6fnbxf"/></g>`,
		"fallback": "streamline-plump-color:file-check-alternate",
	});
}

export default Component;
