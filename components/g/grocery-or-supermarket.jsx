import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y260qjo9u.css';
import '../../css/k/kvtyxvn8k.css';
import '../../css/y/yj-rpobms.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="y260qjo9u"/><circle class="kvtyxvn8k"/><path class="yj-rpobms"/>`,
		"fallback": "map:grocery-or-supermarket",
	});
}

export default Component;
