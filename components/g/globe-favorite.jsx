import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3-0fuwea.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3-0fuwea"/>`,
		"fallback": "fluent-mdl2:globe-favorite",
	});
}

export default Component;
