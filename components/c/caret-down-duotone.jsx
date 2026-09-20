import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai-bhob4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai-bhob4w"/>`,
		"fallback": "stash:caret-down-duotone",
	});
}

export default Component;
