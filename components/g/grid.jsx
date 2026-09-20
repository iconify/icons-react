import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxyynzfvw.css';
import '../../css/y/ygi_xvn9l.css';
import '../../css/h/hckasvbeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxyynzfvw"/><path class="ygi_xvn9l"/><path class="hckasvbeh"/>`,
		"fallback": "uim:grid",
	});
}

export default Component;
