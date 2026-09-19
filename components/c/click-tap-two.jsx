import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/b0qz2dbdj.css';
import '../../css/g/g5g35qm2f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="b0qz2dbdj"/><path class="g5g35qm2f"/></g>`,
		"fallback": "icon-park-outline:click-tap-two",
	});
}

export default Component;
