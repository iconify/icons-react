import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/y/ymxku8hgn.css';
import '../../css/j/jgkjdwbbv.css';
import '../../css/r/rr7hscc0x.css';
import '../../css/n/n5kvjq2ku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="ymxku8hgn"/><path class="jgkjdwbbv"/><path class="rr7hscc0x"/><path class="n5kvjq2ku"/></g>`,
		"fallback": "withicons-retro:file-chart",
	});
}

export default Component;
