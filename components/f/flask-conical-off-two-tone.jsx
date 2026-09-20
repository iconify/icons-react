import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zx7e8kbgq.css';
import '../../css/n/n-n7vabdx.css';
import '../../css/x/xlvg-2zdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zx7e8kbgq"/><path class="n-n7vabdx"/><path class="xlvg-2zdw"/></g>`,
		"fallback": "keyline-icons:flask-conical-off-two-tone",
	});
}

export default Component;
