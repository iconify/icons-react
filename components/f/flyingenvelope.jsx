import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucg8xbjld.css';
import '../../css/y/yqufnccgb.css';
import '../../css/d/dnu_c0bhd.css';
import '../../css/i/icqaqiboc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucg8xbjld"/><path class="yqufnccgb"/><path class="dnu_c0bhd"/><path class="icqaqiboc"/>`,
		"fallback": "fxemoji:flyingenvelope",
	});
}

export default Component;
