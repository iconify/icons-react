import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9jb7t68i.css';
import '../../css/r/ri50dbckk.css';
import '../../css/b/bik43675b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9jb7t68i"/><path class="ri50dbckk"/><path class="bik43675b"/>`,
		"fallback": "ant-design:environment-twotone",
	});
}

export default Component;
