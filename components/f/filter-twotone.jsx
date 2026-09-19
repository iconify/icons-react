import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdxpj0wua.css';
import '../../css/t/tpginfnmp.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdxpj0wua"/><path class="tpginfnmp"/>`,
		"fallback": "ant-design:filter-twotone",
	});
}

export default Component;
