import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jsnid3b6z.css';
import '../../css/v/v-vmoybdk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="jsnid3b6z"/><path class="v-vmoybdk"/></g>`,
		"fallback": "icon-park-solid:afro-pick",
	});
}

export default Component;
