import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5nkwoc8d.css';
import '../../css/i/i-1cn8fad.css';
import '../../css/p/ptk9v2bpu.css';
import '../../css/j/j9jczgbif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k x5nkwoc8d"/><path class="i-1cn8fad wm-k"/><path class="ptk9v2bpu wm-a"/><path class="j9jczgbif wm-a"/>`,
		"fallback": "withicons-bauhaus:gamepad",
	});
}

export default Component;
