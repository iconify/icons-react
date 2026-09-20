import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edfh3w.css';
import '../../css/q/qa-o7h.css';
import '../../css/t/taf2xz.css';
import '../../css/v/vlmmxw.css';
import '../../css/a/ab0nvj.css';
import '../../css/c/copcpq.css';
import '../../css/q/qj_c3u.css';
import '../../css/l/lddddc.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-64.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edfh3w"/><path class="qa-o7h taf2xz vlmmxw"/><path class="ab0nvj qa-o7h"/><path class="copcpq qa-o7h taf2xz"/><path class="qa-o7h qj_c3u taf2xz"/><path class="lddddc qa-o7h taf2xz"/>`,
		"fallback": "line-md:document-report-twotone",
	});
}

export default Component;
