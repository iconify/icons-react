import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h9-rb1b0g.css';
import '../../css/p/p0pk7fzja.css';
import '../../css/v/v3yoqgc_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h9-rb1b0g"/><path class="p0pk7fzja"/><path class="v3yoqgc_d"/></g>`,
		"fallback": "streamline-ultimate:adobe-cloud-logo",
	});
}

export default Component;
