import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a5_1hvbhu.css';
import '../../css/x/xcnzjfvig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a5_1hvbhu"/><path class="xcnzjfvig"/></g>`,
		"fallback": "solar:heart-angle-line-duotone",
	});
}

export default Component;
