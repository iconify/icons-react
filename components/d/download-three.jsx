import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/v/v31u9obdf.css';
import '../../css/n/nv47c26na.css';
import '../../css/z/zyl4k9yjq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="utf5_xbzs"/><path class="v31u9obdf"/><path class="nv47c26na"/><path class="zyl4k9yjq"/></g>`,
		"fallback": "icon-park:download-three",
	});
}

export default Component;
