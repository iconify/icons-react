import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gshe_di8n.css';
import '../../css/s/s1q8lcb1s.css';
import '../../css/a/a0f9uobni.css';
import '../../css/p/pr0649d7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gshe_di8n"/><path class="s1q8lcb1s"/><path class="a0f9uobni"/><path class="pr0649d7i"/>`,
		"fallback": "fontisto:heart-eyes",
	});
}

export default Component;
