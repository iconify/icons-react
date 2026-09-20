import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3kjyubpd.css';
import '../../css/i/i67ob3bwq.css';
import '../../css/e/esgx7hbsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3kjyubpd"/><path clip-rule="evenodd" class="i67ob3bwq"/><path class="esgx7hbsq"/>`,
		"fallback": "tdesign:ai-edit-1-filled",
	});
}

export default Component;
