import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7q3yfbdi.css';
import '../../css/p/p9omok_2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7q3yfbdi"/><path class="p9omok_2a"/>`,
		"fallback": "tdesign:call-forwarded-filled",
	});
}

export default Component;
