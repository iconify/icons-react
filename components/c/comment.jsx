import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzl-5ovtk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzl-5ovtk"/>`,
		"fallback": "fa7-regular:comment",
	});
}

export default Component;
