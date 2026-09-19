import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acwag3hrs.css';
import '../../css/s/so_xtp9om.css';
import '../../css/i/i6c0yob8f.css';
import '../../css/o/onbjybayc.css';
import '../../css/f/fkydmlbjf.css';
import '../../css/q/q9beu7lex.css';
import '../../css/t/trqslsczz.css';
import '../../css/z/za_lg7bqv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acwag3hrs"/><circle class="so_xtp9om"/><circle class="i6c0yob8f"/><g class="onbjybayc"><circle class="fkydmlbjf"/><circle class="q9beu7lex"/><circle class="trqslsczz"/><circle class="za_lg7bqv"/></g>`,
		"fallback": "flat-color-icons:film-reel",
	});
}

export default Component;
