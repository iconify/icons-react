import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/fq9tp7bbo.css';
import '../../css/b/bi74qk6aa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="fq9tp7bbo"/><path class="bi74qk6aa"/></g>`,
		"fallback": "icon-park-solid:effects",
	});
}

export default Component;
