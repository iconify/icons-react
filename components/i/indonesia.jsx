import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr8ohcc6r.css';
import '../../css/t/t39v8hihk.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr8ohcc6r"/><path class="t39v8hihk"/>`,
		"fallback": "tabler-flags:indonesia",
	});
}

export default Component;
