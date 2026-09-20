import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o98lr6b-w.css';
import '../../css/v/vuc8lfbmf.css';
import '../../css/s/su37_dlgf.css';
import '../../css/e/ecqxzqbap.css';
import '../../css/n/n11kupy9m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o98lr6b-w"/><path class="vuc8lfbmf"/><path class="su37_dlgf"/><path class="ecqxzqbap"/><path class="n11kupy9m"/></g>`,
		"fallback": "streamline-color:announcement-megaphone",
	});
}

export default Component;
