import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgkjyd2eu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pgkjyd2eu"/>`,
		"fallback": "lsicon:file-import-filled",
	});
}

export default Component;
