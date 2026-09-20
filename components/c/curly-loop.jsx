import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfukdybcj.css';
import '../../css/e/e-3mmc50d.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfukdybcj"/><path class="e-3mmc50d"/>`,
		"fallback": "openmoji:curly-loop",
	});
}

export default Component;
