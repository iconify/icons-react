import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/sz0ei6zup.css';
import '../../css/z/z9jpn_beu.css';
import '../../css/y/y8m0unbnp.css';
import '../../css/n/nz3crbbcj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="sz0ei6zup"/><path class="z9jpn_beu"/><path class="y8m0unbnp"/><path class="nz3crbbcj"/></g>`,
		"fallback": "icon-park-outline:cable-car",
	});
}

export default Component;
