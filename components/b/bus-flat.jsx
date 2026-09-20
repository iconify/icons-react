import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncvb6585w.css';
import '../../css/d/d92qjjbux.css';
import '../../css/m/mjl92ibwi.css';
import '../../css/d/d68xpcckp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ncvb6585w"/><path clip-rule="evenodd" class="d92qjjbux"/><path clip-rule="evenodd" class="mjl92ibwi"/><path class="d68xpcckp"/></g>`,
		"fallback": "streamline-plump-color:bus-flat",
	});
}

export default Component;
