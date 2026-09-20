import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5eph-bdq.css';
import '../../css/q/qr4wsabqv.css';
import '../../css/g/ga3lzib3e.css';
import '../../css/n/njhb20v1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5eph-bdq"/><path class="qr4wsabqv"/><path class="ga3lzib3e"/><path clip-rule="evenodd" class="njhb20v1u"/>`,
		"fallback": "stash:emoji-wink-plus-duotone",
	});
}

export default Component;
