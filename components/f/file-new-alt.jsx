import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu_jclhgh.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu_jclhgh"/>`,
		"fallback": "el:file-new-alt",
	});
}

export default Component;
