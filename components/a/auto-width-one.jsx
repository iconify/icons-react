import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/m/mhwosdh5o.css';
import '../../css/o/of-q9pmki.css';
import '../../css/y/y3xnb6bof.css';
import '../../css/v/vdunki4fw.css';
import '../../css/p/ple3qktap.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="mhwosdh5o"/><path class="of-q9pmki"/><path class="y3xnb6bof"/><path class="vdunki4fw"/><path class="ple3qktap"/></g>`,
		"fallback": "icon-park:auto-width-one",
	});
}

export default Component;
