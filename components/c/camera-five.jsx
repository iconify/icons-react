import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/ukr1ucczm.css';
import '../../css/s/s7z8uvbmf.css';
import '../../css/j/jddlfcbxw.css';
import '../../css/q/qjgr22b3y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><circle class="ukr1ucczm"/><circle class="s7z8uvbmf"/><path class="jddlfcbxw"/><path class="qjgr22b3y"/></g>`,
		"fallback": "icon-park:camera-five",
	});
}

export default Component;
