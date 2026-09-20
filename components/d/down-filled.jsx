import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz_cz4bbp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sz_cz4bbp"/>`,
		"fallback": "lsicon:down-filled",
	});
}

export default Component;
