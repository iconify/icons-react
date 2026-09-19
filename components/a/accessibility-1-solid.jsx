import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i50vm1o3e.css';
import '../../css/g/gjl4e4_ws.css';
import '../../css/s/sux7xhbue.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 i50vm1o3e"/><path class="clr-i-solid clr-i-solid-path-2 gjl4e4_ws"/><path class="clr-i-solid clr-i-solid-path-3 sux7xhbue"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:accessibility-1-solid",
	});
}

export default Component;
