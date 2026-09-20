import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo_p2j3uc.css';
import '../../css/y/yorsrhfgo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo_p2j3uc"/><path class="yorsrhfgo"/>`,
		"fallback": "material-icon-theme:folder-nginx-open",
	});
}

export default Component;
