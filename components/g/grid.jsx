import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cb5k0fb4e.css';
import '../../css/q/qglu0sgat.css';
import '../../css/w/w379rftri.css';
import '../../css/x/xn2m8zz0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="cb5k0fb4e"/><rect class="qglu0sgat"/><rect class="w379rftri"/><rect class="xn2m8zz0k"/></g>`,
		"fallback": "proicons:grid",
	});
}

export default Component;
