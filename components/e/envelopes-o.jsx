import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xig3ipb1f.css';
import '../../css/k/kh0mfynvy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xig3ipb1f"/><path class="kh0mfynvy"/>`,
		"fallback": "vaadin:envelopes-o",
	});
}

export default Component;
