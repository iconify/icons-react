import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/phvmwjbiq.css';
import '../../css/h/hvz5n6bel.css';
import '../../css/g/gn6ol4bzw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="phvmwjbiq"/><path class="hvz5n6bel"/><path class="gn6ol4bzw"/></g>`,
		"fallback": "icon-park-outline:butterfly",
	});
}

export default Component;
