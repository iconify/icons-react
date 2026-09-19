import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/u/usmbwyqjy.css';
import '../../css/n/nz_rabdja.css';
import '../../css/l/l7ukpk0zz.css';
import '../../css/s/sk-56tbmp.css';
import '../../css/q/qafuu0b7z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="usmbwyqjy"/><path class="nz_rabdja"/><path class="l7ukpk0zz"/><path class="sk-56tbmp"/><path class="qafuu0b7z"/></g>`,
		"fallback": "circle-flags:ch-gr",
	});
}

export default Component;
