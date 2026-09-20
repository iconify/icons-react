import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r8m1a9bnl.css';
import '../../css/t/tkkn2dmyr.css';
import '../../css/u/uf9udxo6b.css';
import '../../css/c/cgu1-bc6z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r8m1a9bnl"/><path class="tkkn2dmyr"/><path class="uf9udxo6b"/><path class="cgu1-bc6z"/></g>`,
		"fallback": "streamline-plump-color:global-warming-2-flat",
	});
}

export default Component;
