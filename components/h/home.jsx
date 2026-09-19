import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/t/t5rd35b9t.css';
import '../../css/x/xdizrabur.css';
import '../../css/h/h7tnjtbgk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJ4yhmdpB"><g class="rohhhzb0l"><path class="t5rd35b9t"/><path class="xdizrabur"/><path class="h7tnjtbgk"/></g></mask></defs><path mask="url(#SVGJ4yhmdpB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:home",
	});
}

export default Component;
