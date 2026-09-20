import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zwzfzolzd.css';
import '../../css/a/ar-cvwksl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zwzfzolzd"/><path class="ar-cvwksl"/></g>`,
		"fallback": "reicon:forward-item2",
	});
}

export default Component;
