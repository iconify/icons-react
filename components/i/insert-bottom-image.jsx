import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iud89e5vo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iud89e5vo"/>`,
		"fallback": "hugeicons:insert-bottom-image",
	});
}

export default Component;
