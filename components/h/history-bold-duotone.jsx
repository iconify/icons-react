import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v25h3yxjz.css';
import '../../css/y/yh5ytlqor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v25h3yxjz"/><path class="yh5ytlqor"/>`,
		"fallback": "solar:history-bold-duotone",
	});
}

export default Component;
