import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6v0htbfx.css';
import '../../css/j/jso3jy2en.css';
import '../../css/e/eca5gmkyn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6v0htbfx"/><path class="jso3jy2en"/><path class="eca5gmkyn"/>`,
		"fallback": "ant-design:file-markdown-twotone",
	});
}

export default Component;
