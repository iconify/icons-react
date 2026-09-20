import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhpwkq3jg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhpwkq3jg"/>`,
		"fallback": "octicon:file-directory-open-fill-16",
	});
}

export default Component;
