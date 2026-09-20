import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uypib39ja.css';
import '../../css/r/rpwu1pdfw.css';
import '../../css/j/jvy1ribzi.css';
import '../../css/i/ickouebez.css';
import '../../css/m/mt4l--b1n.css';
import '../../css/v/vs4i6mbke.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="uypib39ja"><rect class="rpwu1pdfw"/><rect class="jvy1ribzi"/><rect class="ickouebez"/><path class="mt4l--b1n"/><path class="vs4i6mbke"/></g>`,
		"fallback": "material-icon-theme:cds",
	});
}

export default Component;
