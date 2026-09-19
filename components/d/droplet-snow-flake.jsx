import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sy7sdw84v.css';
import '../../css/h/hb8csvf_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sy7sdw84v"/><path class="hb8csvf_f"/></g>`,
		"fallback": "iconoir:droplet-snow-flake",
	});
}

export default Component;
