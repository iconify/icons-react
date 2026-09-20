import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvo5yb4jk.css';
import '../../css/d/d5k0bgbry.css';
import '../../css/s/s4f0-m1sd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="yvo5yb4jk"/><path class="d5k0bgbry"/><path class="s4f0-m1sd"/>`,
		"fallback": "selfhst:continuwuity",
	});
}

export default Component;
