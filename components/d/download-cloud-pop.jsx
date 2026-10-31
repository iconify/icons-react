import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/typhurbru.css';
import '../../css/q/qtqtn3k0h.css';
import '../../css/l/ldgx7xjts.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="typhurbru"/><path class="qtqtn3k0h"/><path class="ldgx7xjts"/></g>`,
		"fallback": "streamline-kameleon-color:download-cloud-pop",
	});
}

export default Component;
