import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa-o7h.css';
import '../../css/t/taf2xz.css';
import '../../css/v/vlmmxw.css';
import '../../css/a/ab0nvj.css';
import '../../css/v/vxmw1k.css';
import '../../css/z/zswq1o.css';
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
		"content": `<path class="qa-o7h taf2xz vlmmxw"/><path class="ab0nvj qa-o7h"/><path class="qa-o7h taf2xz vxmw1k"/><path class="qa-o7h taf2xz zswq1o"/>`,
		"fallback": "line-md:document-list",
	});
}

export default Component;
