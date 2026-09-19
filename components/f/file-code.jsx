import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpxm3ntyq.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpxm3ntyq"/>`,
		"fallback": "fluent-mdl2:file-code",
	});
}

export default Component;
