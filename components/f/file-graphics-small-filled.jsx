import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj_rtjbos.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj_rtjbos"/>`,
		"fallback": "dinkie-icons:file-graphics-small-filled",
	});
}

export default Component;
