import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/sgc6nbcvj.css';
import '../../css/k/keebtzb8q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="sgc6nbcvj"/><rect class="keebtzb8q"/></g>`,
		"fallback": "icon-park-solid:children-cap",
	});
}

export default Component;
