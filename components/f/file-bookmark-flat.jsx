import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xmjb7ibkw.css';
import '../../css/t/tuhzagb-r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xmjb7ibkw"/><path class="tuhzagb-r"/></g>`,
		"fallback": "streamline-flex-color:file-bookmark-flat",
	});
}

export default Component;
