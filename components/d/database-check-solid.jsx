import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g7ca5t3xz.css';
import '../../css/h/hitjxstjz.css';
import '../../css/q/qvtiz2hqe.css';
import '../../css/x/x9a0stbbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g7ca5t3xz"/><path class="hitjxstjz"/><path class="qvtiz2hqe"/><path class="x9a0stbbu"/></g>`,
		"fallback": "iconoir:database-check-solid",
	});
}

export default Component;
