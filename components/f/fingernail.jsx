import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/n/nn4_--rny.css';
import '../../css/g/g7qlcfhvp.css';
import '../../css/m/mj3l5tb6u.css';
import '../../css/x/x9avr_b1n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlocXbbMI"><g class="rohhhzb0l"><path class="nn4_--rny"/><path class="g7qlcfhvp"/><rect class="mj3l5tb6u"/><path class="x9avr_b1n"/></g></mask></defs><path mask="url(#SVGlocXbbMI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:fingernail",
	});
}

export default Component;
