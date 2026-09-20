import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbesepbqw.css';
import '../../css/a/aa14-bs7a.css';
import '../../css/r/rsdomq64f.css';
import '../../css/v/vl4gw6bcj.css';
import '../../css/f/fierqtjvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cbesepbqw"/><path class="aa14-bs7a"/><path class="rsdomq64f"/><path class="vl4gw6bcj"/><path class="fierqtjvr"/>`,
		"fallback": "token:ecox",
	});
}

export default Component;
