import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq6n_s_po.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kq6n_s_po"/>`,
		"fallback": "pajamas:eye-slash",
	});
}

export default Component;
