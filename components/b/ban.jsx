import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/ssxi8fbrc.css';
import '../../css/v/v7wgu5b8y.css';
import '../../css/z/z5e9i4bvb.css';
import '../../css/t/tz77pgb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ssxi8fbrc wm-shadow"/><path class="v7wgu5b8y wm-shadow"/><path class="z5e9i4bvb"/><path class="tz77pgb6j"/></g>`,
		"fallback": "withicons-brutal:ban",
	});
}

export default Component;
