import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/puu5ycbjz.css';
import '../../css/j/j7pl0s5se.css';
import '../../css/e/eytnxnxck.css';
import '../../css/c/contxzbor.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfGr7E6hp"><g class="rohhhzb0l"><path class="puu5ycbjz"/><path class="j7pl0s5se"/><path class="eytnxnxck"/><path class="contxzbor"/></g></mask></defs><path mask="url(#SVGfGr7E6hp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:cooking",
	});
}

export default Component;
