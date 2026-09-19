import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/ai9gsubow.css';
import '../../css/w/w3iaqtbfj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ai9gsubow"/><path class="w3iaqtbfj"/></g>`,
		"fallback": "icon-park-solid:chef-hat",
	});
}

export default Component;
