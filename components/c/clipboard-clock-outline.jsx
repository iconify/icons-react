import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxkbezb3a.css';
import '../../css/e/e3rn21oia.css';
import '../../css/l/lz2l27i1w.css';
import '../../css/n/n9livpbds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxkbezb3a"/><path class="e3rn21oia"/><path class="lz2l27i1w"/><path class="n9livpbds"/>`,
		"fallback": "solar:clipboard-clock-outline",
	});
}

export default Component;
