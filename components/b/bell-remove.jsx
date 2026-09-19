import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oy6zoybsj.css';
import '../../css/g/g518qv7kg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="oy6zoybsj"/><path class="g518qv7kg"/></g>`,
		"fallback": "glyphs:bell-remove",
	});
}

export default Component;
