import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh9jl8b2r.css';
import '../../css/g/gis6lfbgu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh9jl8b2r"/><path class="gis6lfbgu"/>`,
		"fallback": "qlementine-icons:eq-high-boost-16",
	});
}

export default Component;
