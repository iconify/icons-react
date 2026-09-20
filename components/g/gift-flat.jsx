import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gct10wbbm.css';
import '../../css/z/ztxoju9gq.css';
import '../../css/p/pezqc0bao.css';
import '../../css/g/gdl-8huxq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gct10wbbm"/><path clip-rule="evenodd" class="ztxoju9gq"/><path class="pezqc0bao"/><path class="gdl-8huxq"/></g>`,
		"fallback": "streamline-plump-color:gift-flat",
	});
}

export default Component;
