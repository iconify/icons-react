import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xyxefdb9k.css';
import '../../css/u/uwglf-07y.css';
import '../../css/s/smzldib7f.css';
import '../../css/h/hblczebef.css';
import '../../css/c/csxsy-bui.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xyxefdb9k"/><path class="uwglf-07y"/><path class="smzldib7f"/><path class="hblczebef"/><path class="csxsy-bui"/></g>`,
		"fallback": "streamline-flex-color:eject-square",
	});
}

export default Component;
