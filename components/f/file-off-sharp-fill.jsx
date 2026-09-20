import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xfkccq6zj.css';
import '../../css/a/ahhqo1b4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xfkccq6zj"/><path class="ahhqo1b4s"/></g>`,
		"fallback": "keyline-icons:file-off-sharp-fill",
	});
}

export default Component;
