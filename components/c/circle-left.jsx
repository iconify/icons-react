import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzwd2419d.css';
import '../../css/q/q-i98cb_p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzwd2419d"/><path class="q-i98cb_p"/>`,
		"fallback": "icomoon-free:circle-left",
	});
}

export default Component;
