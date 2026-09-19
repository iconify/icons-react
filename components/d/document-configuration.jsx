import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/delp4wn8f.css';
import '../../css/n/n273d0b2g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="delp4wn8f"/><path class="n273d0b2g"/>`,
		"fallback": "carbon:document-configuration",
	});
}

export default Component;
