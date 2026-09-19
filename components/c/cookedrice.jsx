import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afnpse13x.css';
import '../../css/n/n3zmfgmgx.css';
import '../../css/k/kcvmbebru.css';
import '../../css/l/l2igllydu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afnpse13x"/><ellipse class="n3zmfgmgx"/><path class="kcvmbebru"/><path class="l2igllydu"/>`,
		"fallback": "fxemoji:cookedrice",
	});
}

export default Component;
