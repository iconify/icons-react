import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/q/qotkwl1bf.css';
import '../../css/o/omjh3bb_f.css';
import '../../css/c/cnw7n79ym.css';
import '../../css/t/tcgk8ebok.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyd4lhchR"><g class="rohhhzb0l"><path class="qotkwl1bf"/><path class="omjh3bb_f"/><path class="cnw7n79ym"/><path class="tcgk8ebok"/></g></mask></defs><path mask="url(#SVGyd4lhchR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:drink",
	});
}

export default Component;
