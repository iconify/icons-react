import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owkcs8bdj.css';

const viewBox = {"width":456,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="owkcs8bdj"/>`,
		"fallback": "file-icons:dosbox-alt",
	});
}

export default Component;
