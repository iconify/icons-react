import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/o/okm2k4dpt.css';
import '../../css/e/ef5juj20y.css';
import '../../css/s/sl65mob2c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="utf5_xbzs"/><path class="okm2k4dpt"/><path class="ef5juj20y"/><path clip-rule="evenodd" class="sl65mob2c"/></g>`,
		"fallback": "icon-park:adobe-indesign",
	});
}

export default Component;
