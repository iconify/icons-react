import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv2_brboc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rv2_brboc"/>`,
		"fallback": "pajamas:doc-code",
	});
}

export default Component;
