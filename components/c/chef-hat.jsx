import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/s1je56pke.css';
import '../../css/n/n8zywfkio.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="s1je56pke"/><path class="n8zywfkio"/></g>`,
		"fallback": "icon-park-outline:chef-hat",
	});
}

export default Component;
