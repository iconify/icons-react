import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9i4nfbfs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d9i4nfbfs"/>`,
		"fallback": "streamline:cloud-add-remix",
	});
}

export default Component;
