import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c57dn841e.css';
import '../../css/z/z31349b3z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c57dn841e"/><path class="z31349b3z"/>`,
		"fallback": "teenyicons:image-document-solid",
	});
}

export default Component;
