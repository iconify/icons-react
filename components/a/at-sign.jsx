import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mgdjfwbfp.css';
import '../../css/a/a8md-191f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mgdjfwbfp"/><path class="a8md-191f"/></g>`,
		"fallback": "iconoir:at-sign",
	});
}

export default Component;
