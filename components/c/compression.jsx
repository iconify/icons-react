import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/t/t3p_odbjd.css';
import '../../css/h/hh6xadclo.css';
import '../../css/e/e7qwdacyo.css';
import '../../css/j/j_w6i6k0p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9d0Og3iL"><g class="gopnm44um"><path class="t3p_odbjd"/><path class="hh6xadclo"/><path class="e7qwdacyo"/><path class="j_w6i6k0p"/></g></mask></defs><path mask="url(#SVG9d0Og3iL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:compression",
	});
}

export default Component;
