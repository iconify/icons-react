import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o_-d6f-tc.css';
import '../../css/n/nx05ijkma.css';
import '../../css/h/hmbv5jbil.css';
import '../../css/x/xjsinqbmw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o_-d6f-tc"/><path class="nx05ijkma"/><path class="hmbv5jbil"/><path class="xjsinqbmw"/></g>`,
		"fallback": "glyphs:briefcase-medical-outline",
	});
}

export default Component;
