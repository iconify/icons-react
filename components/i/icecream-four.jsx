import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c5xlswnoj.css';
import '../../css/t/tb7bjd3vj.css';
import '../../css/a/aovl4bbis.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="c5xlswnoj"/><path class="tb7bjd3vj"/><path class="aovl4bbis"/></g>`,
		"fallback": "icon-park-solid:icecream-four",
	});
}

export default Component;
