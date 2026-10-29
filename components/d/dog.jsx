import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4ioyfbzk.css';
import '../../css/h/hie35vbnj.css';
import '../../css/k/k1t7ff4oh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4ioyfbzk wm-k"/><path class="hie35vbnj wm-k"/><path class="k1t7ff4oh wm-a"/>`,
		"fallback": "withicons-bauhaus:dog",
	});
}

export default Component;
