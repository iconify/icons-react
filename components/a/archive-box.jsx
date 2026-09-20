import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2jwvtb7p.css';
import '../../css/e/eimq_kjxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2jwvtb7p"/><path class="eimq_kjxv"/>`,
		"fallback": "streamline-freehand:archive-box",
	});
}

export default Component;
