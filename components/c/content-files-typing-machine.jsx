import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4vnr9bsm.css';
import '../../css/s/sliyubglr.css';
import '../../css/j/j-d0sbcgi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4vnr9bsm"/><path class="sliyubglr"/><path class="j-d0sbcgi"/>`,
		"fallback": "streamline-pixel:content-files-typing-machine",
	});
}

export default Component;
