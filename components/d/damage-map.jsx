import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/ssnzky-qs.css';
import '../../css/s/sns6jubpm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ssnzky-qs"/><path clip-rule="evenodd" class="sns6jubpm"/></g>`,
		"fallback": "icon-park-outline:damage-map",
	});
}

export default Component;
