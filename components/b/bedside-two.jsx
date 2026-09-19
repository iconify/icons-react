import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mtkkfsbrb.css';
import '../../css/i/iad93baoy.css';
import '../../css/j/jcrlfrbgh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="mtkkfsbrb"/><path clip-rule="evenodd" class="iad93baoy"/><path class="jcrlfrbgh"/></g>`,
		"fallback": "icon-park-outline:bedside-two",
	});
}

export default Component;
