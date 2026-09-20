import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ko5lcq0hn.css';
import '../../css/a/actkwtdjy.css';
import '../../css/g/ga_jcgb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ko5lcq0hn"/><path clip-rule="evenodd" class="actkwtdjy"/><path clip-rule="evenodd" class="ga_jcgb2y"/></g>`,
		"fallback": "reicon:eye-scan",
	});
}

export default Component;
