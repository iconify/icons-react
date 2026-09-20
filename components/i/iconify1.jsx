import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqy-zd.css';
import '../../css/x/x9nrmw.css';
import '../../css/y/ydovum.css';
import '../../css/d/dmm0ha.css';
import '../../css/v/vpa1li.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fade-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqy-zd"/><path class="x9nrmw ydovum"/><path class="dmm0ha ydovum"/><path class="vpa1li ydovum"/>`,
		"fallback": "line-md:iconify1",
	});
}

export default Component;
