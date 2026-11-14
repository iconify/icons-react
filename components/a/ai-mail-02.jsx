import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b_j-giban.css';
import '../../css/x/xs2v90w6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b_j-giban"/><path class="xs2v90w6d"/></g>`,
		"fallback": "hugeicons:ai-mail-02",
	});
}

export default Component;
