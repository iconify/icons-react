import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7ze_xbnd.css';
import '../../css/n/n1zl3pa7m.css';
import '../../css/c/c84vldf2p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7ze_xbnd"/><path class="n1zl3pa7m"/><path class="c84vldf2p"/>`,
		"fallback": "carbon:ccx",
	});
}

export default Component;
