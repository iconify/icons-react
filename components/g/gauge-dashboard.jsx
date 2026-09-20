import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gdts-2bop.css';
import '../../css/k/kv7u9jh9z.css';
import '../../css/b/bbd8wkbjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gdts-2bop"/><path class="kv7u9jh9z"/><path class="bbd8wkbjf"/></g>`,
		"fallback": "streamline-ultimate:gauge-dashboard",
	});
}

export default Component;
