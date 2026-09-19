import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ida2irumw.css';
import '../../css/s/s0g6i0bzp.css';
import '../../css/l/l7qkcz_ms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ida2irumw"/><path class="s0g6i0bzp"/><path class="l7qkcz_ms"/>`,
		"fallback": "fontisto:arrow-move",
	});
}

export default Component;
