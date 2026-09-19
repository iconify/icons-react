import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y01e7fbft.css';
import '../../css/j/jso3jy2en.css';
import '../../css/s/sve582cmp.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y01e7fbft"/><path class="jso3jy2en"/><path class="sve582cmp"/>`,
		"fallback": "ant-design:file-text-twotone",
	});
}

export default Component;
