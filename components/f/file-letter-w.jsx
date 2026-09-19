import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl6idlb5m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bl6idlb5m"/>`,
		"fallback": "gravity-ui:file-letter-w",
	});
}

export default Component;
