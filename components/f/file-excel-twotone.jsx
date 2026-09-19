import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f85yefe1j.css';
import '../../css/j/jso3jy2en.css';
import '../../css/r/r45tgcbqe.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f85yefe1j"/><path class="jso3jy2en"/><path class="r45tgcbqe"/>`,
		"fallback": "ant-design:file-excel-twotone",
	});
}

export default Component;
