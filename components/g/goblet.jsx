import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/krf-rdb_i.css';
import '../../css/k/k71ds-5nj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="krf-rdb_i"/><path class="k71ds-5nj"/></g>`,
		"fallback": "icon-park-solid:goblet",
	});
}

export default Component;
