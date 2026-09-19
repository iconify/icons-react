import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/x4kvhkb3w.css';
import '../../css/b/bhpciutjo.css';
import '../../css/l/lczvgixin.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="x4kvhkb3w"/><path class="bhpciutjo"/><path class="lczvgixin"/></g>`,
		"fallback": "icon-park-outline:find-one",
	});
}

export default Component;
