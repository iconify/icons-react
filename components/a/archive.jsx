import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/map3bfdxa.css';
import '../../css/o/ofnyteubk.css';
import '../../css/x/x7sqjac5b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="map3bfdxa"/><path class="ofnyteubk"/><path class="x7sqjac5b"/></g>`,
		"fallback": "glyphs-poly:archive",
	});
}

export default Component;
