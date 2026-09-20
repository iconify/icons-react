import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xcnzjfvig.css';
import '../../css/n/ny6rvempn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xcnzjfvig"/><path class="ny6rvempn"/></g>`,
		"fallback": "solar:heart-broken-line-duotone",
	});
}

export default Component;
