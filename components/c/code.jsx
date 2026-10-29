import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owokicyeq.css';
import '../../css/b/bkc1rfxdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owokicyeq wm-k"/><path class="bkc1rfxdc wm-a"/>`,
		"fallback": "withicons-bauhaus:code",
	});
}

export default Component;
