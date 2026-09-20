import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq795xbch.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fq795xbch"/>`,
		"fallback": "pajamas:archive",
	});
}

export default Component;
