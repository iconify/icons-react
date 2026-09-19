import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gvx5yo47i.css';
import '../../css/x/xghe02b3d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gvx5yo47i"/><path class="xghe02b3d"/></g>`,
		"fallback": "glyphs:battery-1",
	});
}

export default Component;
