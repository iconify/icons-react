import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1-cgfbkl.css';
import '../../css/z/zw87xgbff.css';
import '../../css/a/ar3grmbxb.css';
import '../../css/l/lf79v8lgu.css';
import '../../css/s/svzibsbtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1-cgfbkl"/><path class="zw87xgbff"/><path class="ar3grmbxb"/><path clip-rule="evenodd" class="lf79v8lgu"/><path class="svzibsbtw"/>`,
		"fallback": "solar:cassette-bold",
	});
}

export default Component;
