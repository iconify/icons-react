import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac5mg3rgq.css';
import '../../css/e/ev8_qw6or.css';
import '../../css/z/z-sm91biz.css';
import '../../css/u/ug05a87sl.css';
import '../../css/j/jmcuieb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac5mg3rgq wm-k"/><path class="ev8_qw6or wm-k"/><path class="wm-k z-sm91biz"/><path class="ug05a87sl wm-k"/><path class="jmcuieb6d wm-a"/>`,
		"fallback": "withicons-bauhaus:app-window",
	});
}

export default Component;
