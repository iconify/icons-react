import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s-4x4bc8a.css';
import '../../css/e/e_ihsbb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s-4x4bc8a"/><path class="e_ihsbb-d"/></g>`,
		"fallback": "hugeicons:git-compare-arrows",
	});
}

export default Component;
