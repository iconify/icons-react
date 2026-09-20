import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wkws4h7dx.css';
import '../../css/e/eai6xnsxw.css';
import '../../css/p/p19juemcf.css';
import '../../css/v/vprkdwbwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wkws4h7dx"/><path class="eai6xnsxw"/><path class="p19juemcf"/><path class="vprkdwbwa"/></g>`,
		"fallback": "tdesign:gesture-press",
	});
}

export default Component;
