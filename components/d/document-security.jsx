import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-v_r1sov.css';
import '../../css/k/k2n9vabow.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-v_r1sov"/><path class="k2n9vabow"/>`,
		"fallback": "carbon:document-security",
	});
}

export default Component;
