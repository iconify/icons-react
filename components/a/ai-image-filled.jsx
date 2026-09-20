import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcc7li89s.css';
import '../../css/w/w97i0hbdf.css';
import '../../css/j/j9emnib3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcc7li89s"/><path class="w97i0hbdf"/><path class="j9emnib3a"/>`,
		"fallback": "tdesign:ai-image-filled",
	});
}

export default Component;
