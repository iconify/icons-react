import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goq69mcov.css';
import '../../css/l/lk3m7pk_h.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid--badged clr-i-solid-path-1--badged goq69mcov"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-2--badged lk3m7pk_h"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:chat-bubble-solid-badged",
	});
}

export default Component;
