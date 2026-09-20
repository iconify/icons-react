import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdldgbb_g.css';
import '../../css/d/d7q3yfbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdldgbb_g"/><path class="d7q3yfbdi"/>`,
		"fallback": "tdesign:call-cancel-filled",
	});
}

export default Component;
