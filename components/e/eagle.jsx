import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wkanm5b0l.css';
import '../../css/f/fktweubsh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wkanm5b0l"/><circle class="fktweubsh"/></g>`,
		"fallback": "icon-park-outline:eagle",
	});
}

export default Component;
