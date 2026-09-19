import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zikpsxseb.css';
import '../../css/c/cofxwr0zz.css';
import '../../css/t/to4h787tj.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zikpsxseb"/><path class="cofxwr0zz"/><path class="to4h787tj"/>`,
		"fallback": "ant-design:hdd-twotone",
	});
}

export default Component;
