import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1v5f7rwx.css';
import '../../css/b/b62b46bsa.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f1v5f7rwx"/><path class="b62b46bsa"/></g>`,
		"fallback": "thesvg-color:continue",
	});
}

export default Component;
