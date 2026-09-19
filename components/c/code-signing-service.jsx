import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo26xfwgu.css';
import '../../css/r/rokywmbwd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="xo26xfwgu"/><path class="rokywmbwd"/>`,
		"fallback": "carbon:code-signing-service",
	});
}

export default Component;
