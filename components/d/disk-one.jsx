import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/k/kwx2jip_b.css';
import '../../css/f/fycnuihad.css';
import '../../css/y/yls-5ybpa.css';
import '../../css/z/znyalubse.css';
import '../../css/l/l7h3mebia.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="kwx2jip_b"/><rect class="fycnuihad"/><path class="yls-5ybpa"/><path class="znyalubse"/><path class="l7h3mebia"/></g>`,
		"fallback": "icon-park:disk-one",
	});
}

export default Component;
