import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oyihu2byg.css';
import '../../css/p/pgnl-6cmr.css';
import '../../css/a/a4xs0knkz.css';
import '../../css/t/tv5rw3b3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oyihu2byg"/><path class="pgnl-6cmr"/><path class="a4xs0knkz"/><path class="tv5rw3b3p"/></g>`,
		"fallback": "streamline-ultimate-color:gesture-double-tap",
	});
}

export default Component;
