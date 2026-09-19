import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymy8u3fmy.css';
import '../../css/d/di3cg09op.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymy8u3fmy"/><path class="di3cg09op"/>`,
		"fallback": "boxicons:analyze-filled",
	});
}

export default Component;
