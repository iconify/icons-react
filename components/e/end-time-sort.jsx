import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/i/i0xmk6bak.css';
import '../../css/o/o0mkz_b0e.css';
import '../../css/t/tmrc4obye.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="i0xmk6bak"/><path class="o0mkz_b0e"/><path class="tmrc4obye"/></g>`,
		"fallback": "icon-park-outline:end-time-sort",
	});
}

export default Component;
