import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w81b3e94v.css';
import '../../css/w/w1ubgebig.css';
import '../../css/b/b433mt92k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w81b3e94v"/><path class="w1ubgebig"/><path class="b433mt92k"/></g>`,
		"fallback": "streamline-ultimate:color-palette",
	});
}

export default Component;
