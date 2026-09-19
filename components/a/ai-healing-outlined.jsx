import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3b7b6biu.css';
import '../../css/d/d79oyzb2x.css';
import '../../css/d/d1ym2h3ya.css';
import '../../css/d/d9tmbcbad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3b7b6biu"/><circle class="d79oyzb2x"/><circle class="d1ym2h3ya"/><path class="d9tmbcbad"/>`,
		"fallback": "eos-icons:ai-healing-outlined",
	});
}

export default Component;
