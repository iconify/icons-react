import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tmhs8r1ps.css';
import '../../css/d/d_xs8tbkb.css';
import '../../css/b/bf3cxvlkw.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="tmhs8r1ps"/><path class="d_xs8tbkb wm-shine"/><path class="bf3cxvlkw"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:git-commit",
	});
}

export default Component;
