import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5u3jub2n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u5u3jub2n"/>`,
		"fallback": "heroicons-solid:document-download",
	});
}

export default Component;
