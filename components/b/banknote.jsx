import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cqibqf0me.css';
import '../../css/l/lgsls3qrz.css';
import '../../css/g/gnfde-odv.css';
import '../../css/z/z4fzfc_1c.css';
import '../../css/g/gimw_kpih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="cqibqf0me wm-shadow"/><path class="lgsls3qrz wm-shadow"/><path class="gnfde-odv"/><path class="z4fzfc_1c"/><path class="gimw_kpih"/></g>`,
		"fallback": "withicons-brutal:banknote",
	});
}

export default Component;
