import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yei-fubty.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zyctw5lxf.css';
import '../../css/d/dn9-vgbis.css';
import '../../css/q/qyiz8wb3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary yei-fubty"/><g class="dt0cm9dhy primary"><path class="zyctw5lxf"/><path class="dn9-vgbis"/><path class="qyiz8wb3a"/></g>`,
		"fallback": "iconaut:ai-chip-duo",
	});
}

export default Component;
