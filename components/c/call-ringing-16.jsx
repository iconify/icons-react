import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf_jb02lk.css';
import '../../css/v/v3xgw3bxc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wf_jb02lk"/><path class="v3xgw3bxc"/>`,
		"fallback": "qlementine-icons:call-ringing-16",
	});
}

export default Component;
