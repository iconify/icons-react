import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by16inp-h.css';
import '../../css/s/sv5qxsucw.css';
import '../../css/q/qm-_zf39g.css';
import '../../css/l/lydvqibvx.css';
import '../../css/z/z6hj17xja.css';
import '../../css/d/dwlni5byc.css';
import '../../css/a/a3nurwmxv.css';
import '../../css/s/samvuvhwh.css';
import '../../css/w/wy88wptfw.css';
import '../../css/u/uelo9kz2h.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by16inp-h"/><path class="sv5qxsucw"/><path class="qm-_zf39g"/><path class="lydvqibvx"/><path class="z6hj17xja"/><path class="dwlni5byc"/><path class="a3nurwmxv"/><path class="samvuvhwh"/><path class="wy88wptfw"/><path class="uelo9kz2h"/>`,
		"fallback": "tabler-flags:eswatini",
	});
}

export default Component;
