import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/g/gx85gbbnh.css';
import '../../css/z/z6kbq_bzk.css';
import '../../css/o/og6a1ng5c.css';
import '../../css/l/lvfkzebln.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="gx85gbbnh"/><path class="z6kbq_bzk"/><path class="og6a1ng5c"/><path class="lvfkzebln"/></g>`,
		"fallback": "icon-park-solid:coconut-tree",
	});
}

export default Component;
