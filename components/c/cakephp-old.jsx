import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_bki1las.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_bki1las"/>`,
		"fallback": "file-icons:cakephp-old",
	});
}

export default Component;
