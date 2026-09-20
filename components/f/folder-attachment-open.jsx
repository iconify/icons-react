import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urvd_efow.css';
import '../../css/i/iqsbobj2a.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urvd_efow"/><path class="iqsbobj2a"/>`,
		"fallback": "material-icon-theme:folder-attachment-open",
	});
}

export default Component;
