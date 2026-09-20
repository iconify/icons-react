import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysinye0wp.css';
import '../../css/d/duw7vs3po.css';
import '../../css/o/o3v3nubmo.css';
import '../../css/r/rui2_f6im.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysinye0wp"/><path class="duw7vs3po"/><path class="o3v3nubmo"/><path class="rui2_f6im"/>`,
		"fallback": "selfhst:beefiles",
	});
}

export default Component;
