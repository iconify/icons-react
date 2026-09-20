import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrxlgg64z.css';
import '../../css/h/hzgg3n9zf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="hrxlgg64z"/><path class="hzgg3n9zf"/>`,
		"fallback": "uim:clock-two",
	});
}

export default Component;
