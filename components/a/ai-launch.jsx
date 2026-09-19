import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvhew3bau.css';
import '../../css/t/tb-x70blq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvhew3bau"/><path class="tb-x70blq"/>`,
		"fallback": "carbon:ai-launch",
	});
}

export default Component;
