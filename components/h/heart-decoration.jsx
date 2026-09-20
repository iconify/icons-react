import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqv0xpf4a.css';
import '../../css/b/bd4d-6b9d.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/c/cgeqbibxe.css';
import '../../css/n/n8gu1ebhy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqv0xpf4a"/><path class="bd4d-6b9d"/><g class="kdz4acc8r"><path class="cgeqbibxe"/><path class="n8gu1ebhy"/></g>`,
		"fallback": "openmoji:heart-decoration",
	});
}

export default Component;
