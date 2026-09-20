import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl5h54bul.css';
import '../../css/n/ni1f-ib-g.css';
import '../../css/o/ogrgq48lj.css';

const viewBox = {"width":2472.8,"height":1996.5,"left":0.1,"top":16.7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl5h54bul"/><path class="ni1f-ib-g"/><path class="ogrgq48lj"/>`,
		"fallback": "thesvg-color:blender",
	});
}

export default Component;
