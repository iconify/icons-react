import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1_qe2bot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1_qe2bot"/>`,
		"fallback": "tdesign:image-off",
	});
}

export default Component;
