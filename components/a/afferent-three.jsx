import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pqey3lxda.css';
import '../../css/u/u7hylqbkt.css';
import '../../css/v/vkbnpccsv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="pqey3lxda"/><path class="u7hylqbkt"/><path class="vkbnpccsv"/></g>`,
		"fallback": "icon-park-outline:afferent-three",
	});
}

export default Component;
