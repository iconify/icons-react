import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u11ifk20b.css';

const viewBox = {"width":439,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u11ifk20b"/>`,
		"fallback": "file-icons:asciidoc",
	});
}

export default Component;
