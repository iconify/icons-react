import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux_5wvris.css';
import '../../css/j/jso3jy2en.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux_5wvris"/><path class="jso3jy2en"/>`,
		"fallback": "ant-design:file-twotone",
	});
}

export default Component;
