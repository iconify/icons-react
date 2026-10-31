import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9ts_gbgo.css';
import '../../css/e/eve76ufxm.css';
import '../../css/c/crzx6podm.css';
import '../../css/f/fm-1f-6la.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9ts_gbgo"/><path class="eve76ufxm"/><path class="crzx6podm"/><path class="fm-1f-6la"/>`,
		"fallback": "iconito:basil",
	});
}

export default Component;
