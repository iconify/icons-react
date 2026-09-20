import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/d/d6miwubix.css';
import '../../css/w/wdn7drbsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="d6miwubix"/><path class="wdn7drbsr"/></g>`,
		"fallback": "tdesign:file-unknown",
	});
}

export default Component;
