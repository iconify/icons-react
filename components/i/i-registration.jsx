import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg9i9abcg.css';
import '../../css/u/u_kzc3htk.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg9i9abcg"/><path class="u_kzc3htk"/>`,
		"fallback": "medical-icon:i-registration",
	});
}

export default Component;
