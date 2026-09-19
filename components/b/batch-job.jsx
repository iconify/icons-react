import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knnax3buu.css';
import '../../css/v/vbuatlb1w.css';
import '../../css/j/jymfo0b9p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knnax3buu"/><path class="vbuatlb1w"/><path class="jymfo0b9p"/>`,
		"fallback": "carbon:batch-job",
	});
}

export default Component;
