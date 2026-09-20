import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayoxpmbui.css';
import '../../css/e/ex6n6ltjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayoxpmbui"/><path class="ex6n6ltjb"/>`,
		"fallback": "pixel:file-import-solid",
	});
}

export default Component;
