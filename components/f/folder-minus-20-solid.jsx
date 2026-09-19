import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3md_prhd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u3md_prhd"/>`,
		"fallback": "heroicons:folder-minus-20-solid",
	});
}

export default Component;
