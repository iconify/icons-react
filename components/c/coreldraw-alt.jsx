import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2_ie9n9l.css';

const viewBox = {"width":371,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b2_ie9n9l"/>`,
		"fallback": "file-icons:coreldraw-alt",
	});
}

export default Component;
