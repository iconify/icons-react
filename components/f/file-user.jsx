import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c73e0yd1g.css';
import '../../css/s/s-37tkb2d.css';
import '../../css/y/ykzxdyblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c73e0yd1g"/><path class="s-37tkb2d"/><path class="ykzxdyblb"/></g>`,
		"fallback": "hugeicons:file-user",
	});
}

export default Component;
