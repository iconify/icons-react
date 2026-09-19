import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gmw0obfoc.css';
import '../../css/c/crkkhbcfx.css';
import '../../css/h/h9mln3b3p.css';
import '../../css/o/oez8gzbxd.css';
import '../../css/g/gq1a1bj9c.css';
import '../../css/r/rfzu-sjnr.css';
import '../../css/i/isc0hbc0g.css';
import '../../css/v/vudlxhv6m.css';
import '../../css/t/tf0idgbjt.css';
import '../../css/z/z32gwypoj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gmw0obfoc"/><path class="crkkhbcfx"/><path class="h9mln3b3p"/><path class="oez8gzbxd"/><path class="gq1a1bj9c"/><path class="rfzu-sjnr"/><path class="isc0hbc0g"/><path class="vudlxhv6m"/><path class="tf0idgbjt"/><path class="z32gwypoj"/></g>`,
		"fallback": "fluent-emoji-flat:boy-medium-light",
	});
}

export default Component;
