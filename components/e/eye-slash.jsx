import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sx312ii4d.css';
import '../../css/h/h5q8bi3ys.css';
import '../../css/z/zbrg6qx3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sx312ii4d"/><path class="h5q8bi3ys"/><path class="zbrg6qx3y"/></g>`,
		"fallback": "reicon:eye-slash",
	});
}

export default Component;
