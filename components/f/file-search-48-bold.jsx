import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8jsxg0hb.css';
import '../../css/y/y288-qr4x.css';
import '../../css/z/zzhfcob3h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8jsxg0hb"/><path class="y288-qr4x"/><path class="zzhfcob3h"/>`,
		"fallback": "energy-icons:file-search-48-bold",
	});
}

export default Component;
