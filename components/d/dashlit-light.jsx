import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogns7qblp.css';
import '../../css/v/vqarvxxid.css';
import '../../css/g/gfgm58bvb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogns7qblp"/><path class="vqarvxxid"/><path class="gfgm58bvb"/>`,
		"fallback": "selfhst:dashlit-light",
	});
}

export default Component;
