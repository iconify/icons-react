import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/u/ucql2ixgq.css';
import '../../css/a/abjxd4g5a.css';
import '../../css/i/ifwg-w9dt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="ucql2ixgq"/><path class="abjxd4g5a"/><path class="ifwg-w9dt"/></g>`,
		"fallback": "icon-park-outline:bottle-two",
	});
}

export default Component;
