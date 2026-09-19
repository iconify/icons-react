import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvof47lrw.css';
import '../../css/j/jtcikdbak.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvof47lrw"/><path class="jtcikdbak"/>`,
		"fallback": "ant-design:api-twotone",
	});
}

export default Component;
