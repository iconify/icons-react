import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q4bj7xbuk.css';
import '../../css/k/k4tp0gbvb.css';
import '../../css/p/pqz1p_b-c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="q4bj7xbuk"/><circle class="k4tp0gbvb"/><path class="pqz1p_b-c"/></g>`,
		"fallback": "icon-park-outline:image-files",
	});
}

export default Component;
