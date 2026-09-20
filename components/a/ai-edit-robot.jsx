import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/u/u6g1rqbim.css';
import '../../css/h/hbs0o7bdl.css';
import '../../css/i/igv4w83qw.css';
import '../../css/w/w6aoc6bjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="u6g1rqbim"/><path class="hbs0o7bdl"/><path class="igv4w83qw"/><path class="w6aoc6bjm"/></g>`,
		"fallback": "streamline-sharp-color:ai-edit-robot",
	});
}

export default Component;
