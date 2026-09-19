import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsh9rtrrg.css';
import '../../css/p/pnm561ulh.css';
import '../../css/r/r10cmbc9l.css';
import '../../css/g/gyw-nbbys.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tsh9rtrrg"><rect class="pnm561ulh"/><rect class="r10cmbc9l"/><rect class="gyw-nbbys"/></g>`,
		"fallback": "glyphs:columns-3-bold",
	});
}

export default Component;
