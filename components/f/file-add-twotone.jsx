import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7mk-dp-h.css';
import '../../css/j/jso3jy2en.css';
import '../../css/n/n5rxf3buq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7mk-dp-h"/><path class="jso3jy2en"/><path class="n5rxf3buq"/>`,
		"fallback": "ant-design:file-add-twotone",
	});
}

export default Component;
