import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp7k9_mku.css';
import '../../css/b/btu4zi_dc.css';
import '../../css/x/xcbtxr5ut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp7k9_mku"/><circle class="btu4zi_dc"/><path class="xcbtxr5ut"/>`,
		"fallback": "circum:circle-question",
	});
}

export default Component;
