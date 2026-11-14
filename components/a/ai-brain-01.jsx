import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/htj3e9bhs.css';
import '../../css/t/txfxjqb6g.css';
import '../../css/i/ixt95bbei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="htj3e9bhs"/><path class="txfxjqb6g"/><path class="ixt95bbei"/></g>`,
		"fallback": "hugeicons:ai-brain-01",
	});
}

export default Component;
