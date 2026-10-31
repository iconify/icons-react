import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl7697j7m.css';
import '../../css/x/x4jxcf4cm.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl7697j7m"/><path class="x4jxcf4cm"/>`,
		"fallback": "tabler-flags:bahrain",
	});
}

export default Component;
