import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jgy3pwvey.css';
import '../../css/x/x7f3ysb0w.css';
import '../../css/i/iydzddcqg.css';
import '../../css/d/d8x507jcg.css';
import '../../css/u/u3ukrc6jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="jgy3pwvey wm-shadow"/><path class="wm-shadow x7f3ysb0w"/><path class="iydzddcqg"/><path class="d8x507jcg"/><path class="u3ukrc6jk"/></g>`,
		"fallback": "withicons-brutal:butterfly",
	});
}

export default Component;
