import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/b8cd-f9hp.css';
import '../../css/r/r__fs9qdv.css';
import '../../css/d/d8x3xzbpj.css';
import '../../css/q/q5iwxve0v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="b8cd-f9hp"/><path class="r__fs9qdv"/><path class="d8x3xzbpj"/><path class="q5iwxve0v"/></g>`,
		"fallback": "icon-park-solid:branch-one",
	});
}

export default Component;
