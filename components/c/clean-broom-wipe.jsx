import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s6lk2bcmw.css';
import '../../css/p/pf0ka8bym.css';
import '../../css/n/nr_itt2gj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s6lk2bcmw"/><path class="pf0ka8bym"/><path class="nr_itt2gj"/></g>`,
		"fallback": "streamline-flex-color:clean-broom-wipe",
	});
}

export default Component;
