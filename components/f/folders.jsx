import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ylbg4lbgu.css';
import '../../css/w/wmz1ufbjp.css';
import '../../css/h/hb69zybad.css';
import '../../css/d/d_68lyxlo.css';
import '../../css/n/nlns1abjw.css';
import '../../css/w/wknnd4qxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow ylbg4lbgu"/><path class="wmz1ufbjp"/><path class="hb69zybad"/><path class="d_68lyxlo"/><path class="nlns1abjw"/><path class="wknnd4qxj"/></g>`,
		"fallback": "withicons-retro:folders",
	});
}

export default Component;
