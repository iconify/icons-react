import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghylczb-n.css';
import '../../css/s/svi8x9byo.css';
import '../../css/d/dj90s9bvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghylczb-n"/><path class="svi8x9byo"/><path clip-rule="evenodd" class="dj90s9bvc"/>`,
		"fallback": "mingcute:file-forbid-fill",
	});
}

export default Component;
