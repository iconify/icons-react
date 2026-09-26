import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/ghv12qbis.css';
import '../../css/d/d6or4zd7k.css';
import '../../css/f/fthphob1f.css';
import '../../css/s/s8jymw4de.css';
import '../../css/l/ljibb1c5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ghv12qbis"/><path class="d6or4zd7k"/><path class="fthphob1f"/><path class="s8jymw4de"/><path class="ljibb1c5d"/></g>`,
		"fallback": "solar:chevrons-left-right-ellipsis-broken",
	});
}

export default Component;
