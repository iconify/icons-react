import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n10napp6q.css';
import '../../css/z/zi-9qcbti.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n10napp6q"/><path class="zi-9qcbti"/>`,
		"fallback": "carbon:block-storage",
	});
}

export default Component;
