import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/y/yzi5kb6_x.css';
import '../../css/e/epu53i2gd.css';
import '../../css/i/itwltdbml.css';
import '../../css/n/nogsjomrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="yzi5kb6_x"/><path class="epu53i2gd"/><path class="itwltdbml"/><path class="nogsjomrl"/></g>`,
		"fallback": "withicons-retro:file-image",
	});
}

export default Component;
