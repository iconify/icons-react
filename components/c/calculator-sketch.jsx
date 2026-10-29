import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/irsn4xb5r.css';
import '../../css/r/r338hqbsu.css';
import '../../css/l/lvjdmbcqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="irsn4xb5r"/><path class="r338hqbsu wm-k"/><path class="lvjdmbcqy wm-a"/></g>`,
		"fallback": "withicons:calculator-sketch",
	});
}

export default Component;
