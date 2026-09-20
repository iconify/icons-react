import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3t8i6bmf.css';
import '../../css/a/aa-24kbsv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x3t8i6bmf"/><path class="aa-24kbsv"/>`,
		"fallback": "streamline-block:basic-ui-unlink",
	});
}

export default Component;
