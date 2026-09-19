import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omfz_bb6w.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omfz_bb6w"/>`,
		"fallback": "ant-design:file-add-outline",
	});
}

export default Component;
