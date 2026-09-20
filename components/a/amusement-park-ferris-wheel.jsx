import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pk50-gb3e.css';
import '../../css/k/k-350gb_u.css';
import '../../css/f/fu2aarbmx.css';
import '../../css/e/enfc71bus.css';
import '../../css/y/y-s4hhrxg.css';
import '../../css/i/i2tb385mk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pk50-gb3e"/><path class="k-350gb_u"/><path class="fu2aarbmx"/><path class="enfc71bus"/><path class="y-s4hhrxg"/><path class="i2tb385mk"/></g>`,
		"fallback": "streamline-ultimate-color:amusement-park-ferris-wheel",
	});
}

export default Component;
