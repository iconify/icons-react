import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gg0980_3p.css';
import '../../css/n/n1r6dl4la.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gg0980_3p"/><path class="n1r6dl4la"/></g>`,
		"fallback": "glyphs:exclude",
	});
}

export default Component;
