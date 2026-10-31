import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ig50veboi.css';
import '../../css/w/wz6wyd0qz.css';
import '../../css/a/avcvo1bgd.css';
import '../../css/h/h23kvgyag.css';
import '../../css/t/tskbaab5u.css';
import '../../css/c/ckga4abpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ig50veboi wm-shadow"/><path class="wz6wyd0qz"/><path class="avcvo1bgd"/><path class="h23kvgyag"/><path class="tskbaab5u"/><path class="ckga4abpi"/></g>`,
		"fallback": "withicons-retro:folder-down",
	});
}

export default Component;
