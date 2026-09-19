import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9j99ekyh.css';
import '../../css/j/jso3jy2en.css';
import '../../css/k/kbsh_4bin.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9j99ekyh"/><path class="jso3jy2en"/><path class="kbsh_4bin"/>`,
		"fallback": "ant-design:file-image-twotone",
	});
}

export default Component;
