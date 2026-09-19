import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/s/szyzabcia.css';
import '../../css/x/xs42h82yl.css';
import '../../css/r/rk6ey_39w.css';
import '../../css/g/gddoymk0q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="szyzabcia"/><path class="xs42h82yl"/><path class="rk6ey_39w"/><path class="gddoymk0q"/></g>`,
		"fallback": "circle-flags:ba",
	});
}

export default Component;
