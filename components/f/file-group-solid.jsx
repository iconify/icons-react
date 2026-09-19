import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr55tcb6u.css';
import '../../css/o/oh0uss8kv.css';
import '../../css/j/jzxyxbtne.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 qr55tcb6u"/><path class="clr-i-solid clr-i-solid-path-2 oh0uss8kv"/><path class="clr-i-solid clr-i-solid-path-3 jzxyxbtne"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:file-group-solid",
	});
}

export default Component;
