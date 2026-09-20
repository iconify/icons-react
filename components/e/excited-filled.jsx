import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrmky_bdh.css';
import '../../css/z/zos2k5b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrmky_bdh"/><path class="zos2k5b9s"/>`,
		"fallback": "tdesign:excited-filled",
	});
}

export default Component;
