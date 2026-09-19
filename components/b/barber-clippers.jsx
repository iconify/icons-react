import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cwxxxccvd.css';
import '../../css/m/mz6gfbc4a.css';
import '../../css/g/g0etr6b-w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="cwxxxccvd"/><rect class="mz6gfbc4a"/><path class="g0etr6b-w"/></g>`,
		"fallback": "icon-park-outline:barber-clippers",
	});
}

export default Component;
