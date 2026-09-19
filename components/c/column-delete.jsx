import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egt7e-0qv.css';
import '../../css/z/z2q2hdbup.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egt7e-0qv"/><path class="z2q2hdbup"/>`,
		"fallback": "carbon:column-delete",
	});
}

export default Component;
