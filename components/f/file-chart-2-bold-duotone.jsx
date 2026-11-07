import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj6gwrmjs.css';
import '../../css/e/eacjsps5x.css';
import '../../css/f/fu8d2pk9u.css';
import '../../css/l/ln-3qwbqe.css';
import '../../css/x/x4f46-b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oj6gwrmjs"/><path class="eacjsps5x"/><path class="fu8d2pk9u"/><path class="ln-3qwbqe"/><path class="x4f46-b2l"/>`,
		"fallback": "solar:file-chart-2-bold-duotone",
	});
}

export default Component;
