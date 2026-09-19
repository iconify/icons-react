import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/a/am1igebwo.css';
import '../../css/c/c5dwnijuu.css';
import '../../css/e/e3l3qbcgf.css';
import '../../css/e/eaezi2ufu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="am1igebwo"/><path class="c5dwnijuu"/><path class="e3l3qbcgf"/><path class="eaezi2ufu"/></g>`,
		"fallback": "icon-park:expand-up",
	});
}

export default Component;
