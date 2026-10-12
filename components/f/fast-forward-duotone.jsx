import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qvvkymbgd.css';
import '../../css/i/iz2hkkrwh.css';
import '../../css/e/e3ly_bbmk.css';
import '../../css/q/qew6ru_gy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qvvkymbgd"/><path class="iz2hkkrwh"/><path class="e3ly_bbmk"/><path class="qew6ru_gy"/></g>`,
		"fallback": "lucide-extended:fast-forward-duotone",
	});
}

export default Component;
