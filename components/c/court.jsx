import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/kmydzbsxv.css';
import '../../css/b/bk8ioe9xt.css';
import '../../css/a/a1ppbdbvw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="kmydzbsxv"/><circle class="bk8ioe9xt"/><path class="a1ppbdbvw"/></g>`,
		"fallback": "icon-park-outline:court",
	});
}

export default Component;
