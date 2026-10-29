import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e2x-09boi.css';
import '../../css/i/iu_8r8inh.css';
import '../../css/b/baoogbiqr.css';
import '../../css/q/qk9xa2v5m.css';
import '../../css/o/o_yfqzfoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="e2x-09boi"/><path class="iu_8r8inh"/><path class="baoogbiqr"/><path class="qk9xa2v5m"/><path class="o_yfqzfoz"/></g>`,
		"fallback": "withicons-bauhaus:avatar-person",
	});
}

export default Component;
