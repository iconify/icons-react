import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pshpb9b-b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pshpb9b-b"/>`,
		"fallback": "ant-design:file-search-outlined",
	});
}

export default Component;
