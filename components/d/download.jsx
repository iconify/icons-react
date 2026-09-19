import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9k8jmgpw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9k8jmgpw"/>`,
		"fallback": "bytesize:download",
	});
}

export default Component;
