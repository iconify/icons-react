import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p3yq3u9df.css';
import '../../css/p/p94k-ci-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p3yq3u9df"/><path class="p94k-ci-s"/></g>`,
		"fallback": "hugeicons:calendar-user",
	});
}

export default Component;
