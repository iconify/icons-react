import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6mogacyz.css';
import '../../css/r/raky5r2xx.css';
import '../../css/n/n_rsox0pp.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6mogacyz"/><path class="raky5r2xx"/><path class="n_rsox0pp"/>`,
		"fallback": "tabler-flags:bolivia",
	});
}

export default Component;
