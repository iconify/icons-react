import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkov0acma.css';
import '../../css/z/z9g7v-2tg.css';
import '../../css/d/dexi_790w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkov0acma"/><path class="z9g7v-2tg"/><path class="dexi_790w"/>`,
		"fallback": "energy-icons:file-search-48",
	});
}

export default Component;
