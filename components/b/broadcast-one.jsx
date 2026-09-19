import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csw0kbbpv.css';
import '../../css/w/wckasab0r.css';
import '../../css/e/ed5_y302y.css';
import '../../css/f/fw_40y71x.css';
import '../../css/e/em5bsmbgk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0kqMBeBB"><g class="csw0kbbpv"><path class="wckasab0r"/><path class="ed5_y302y"/><path class="fw_40y71x"/><path class="em5bsmbgk"/></g></mask></defs><path mask="url(#SVG0kqMBeBB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:broadcast-one",
	});
}

export default Component;
