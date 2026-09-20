import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww_f37bpw.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww_f37bpw"/>`,
		"fallback": "marketeq:fire-left",
	});
}

export default Component;
