import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/nqk0mrsuo.css';
import '../../css/n/n16lh5xxw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="nqk0mrsuo"/><path class="n16lh5xxw"/></g>`,
		"fallback": "icon-park-outline:helmet-one",
	});
}

export default Component;
