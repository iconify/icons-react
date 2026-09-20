import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk_1fybkb.css';
import '../../css/h/hc5l59cwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk_1fybkb"/><path class="hc5l59cwp"/>`,
		"fallback": "octicon:codespaces-24",
	});
}

export default Component;
