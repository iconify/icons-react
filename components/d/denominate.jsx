import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsa0nvhry.css';
import '../../css/a/akvx_0hja.css';
import '../../css/i/i4p6t7bdm.css';
import '../../css/b/byxrqbd5t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsa0nvhry"/><path class="akvx_0hja"/><path class="i4p6t7bdm"/><path class="byxrqbd5t"/>`,
		"fallback": "carbon:denominate",
	});
}

export default Component;
