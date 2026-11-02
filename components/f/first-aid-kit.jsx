import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/be41fdzrn.css';
import '../../css/f/f7-uiw-hy.css';
import '../../css/x/xbx953bhf.css';
import '../../css/a/aoyzxvbbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="be41fdzrn"/><path class="f7-uiw-hy"/><path class="xbx953bhf"/><path class="aoyzxvbbp"/></g>`,
		"fallback": "matita:first-aid-kit",
	});
}

export default Component;
