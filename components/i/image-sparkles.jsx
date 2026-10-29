import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vpio5fw1m.css';
import '../../css/i/i-hwwyqmh.css';
import '../../css/a/aj64kf97i.css';
import '../../css/i/ix2rklbns.css';
import '../../css/p/p93mfqadc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vpio5fw1m wm-k"/><path class="i-hwwyqmh wm-k"/><path class="aj64kf97i wm-s"/><path class="ix2rklbns"/><path class="p93mfqadc"/></g>`,
		"fallback": "withicons-bauhaus:image-sparkles",
	});
}

export default Component;
