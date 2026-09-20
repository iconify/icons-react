import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmp6hg-nz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dmp6hg-nz"/>`,
		"fallback": "pajamas:doc-new",
	});
}

export default Component;
