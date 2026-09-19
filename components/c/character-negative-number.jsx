import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jaxt6_bwl.css';
import '../../css/b/bq2d9feiz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jaxt6_bwl"/><path class="bq2d9feiz"/>`,
		"fallback": "carbon:character-negative-number",
	});
}

export default Component;
