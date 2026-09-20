import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v90gbqbox.css';
import '../../css/n/npzbi206w.css';
import '../../css/v/voif_5bdv.css';
import '../../css/h/hl51kmiih.css';
import '../../css/p/p12ebw2el.css';
import '../../css/h/h6zst5bek.css';
import '../../css/u/u8zxqedgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="v90gbqbox"/><circle class="npzbi206w"/><circle class="voif_5bdv"/><circle class="hl51kmiih"/><circle class="p12ebw2el"/><circle class="h6zst5bek"/><path class="u8zxqedgz"/></g>`,
		"fallback": "majesticons:ferris-wheel-line",
	});
}

export default Component;
