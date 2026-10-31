import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fqkjurbuw.css';
import '../../css/s/sgwrsi3nu.css';
import '../../css/h/hqm-_jb2t.css';
import '../../css/a/aoangbcdl.css';
import '../../css/y/ydt219i9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fqkjurbuw wm-shadow"/><path class="sgwrsi3nu"/><path class="hqm-_jb2t"/><path class="aoangbcdl"/><path class="ydt219i9q"/></g>`,
		"fallback": "withicons-retro:avatar-unicorn",
	});
}

export default Component;
