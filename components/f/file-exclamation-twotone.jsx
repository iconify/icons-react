import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk-nafbcd.css';
import '../../css/j/jso3jy2en.css';
import '../../css/k/kpy2_do4f.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk-nafbcd"/><path class="jso3jy2en"/><path class="kpy2_do4f"/>`,
		"fallback": "ant-design:file-exclamation-twotone",
	});
}

export default Component;
