import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpl9-m38e.css';
import '../../css/w/wrto5cmdt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpl9-m38e"/><path class="wrto5cmdt"/>`,
		"fallback": "carbon:error-filled",
	});
}

export default Component;
