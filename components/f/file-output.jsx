import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/u/u0gz1y73f.css';
import '../../css/b/b8hv0cvxt.css';
import '../../css/b/bb6igbbqy.css';
import '../../css/c/ccqtocb1j.css';
import '../../css/k/kq-pr9qwh.css';
import '../../css/q/qx5ho9ouq.css';
import '../../css/v/va6aw6b1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGdSVONocx" x1="9" x2="15" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGdSVONocx)" class="u0gz1y73f"/><path class="b8hv0cvxt wm-a"/><path class="bb6igbbqy wm-shine"/><path class="ccqtocb1j wm-shine"/><path class="kq-pr9qwh wm-shine"/><path class="qx5ho9ouq wm-shine"/><path class="va6aw6b1f wm-shine"/></g>`,
		"fallback": "withicons-utsav:file-output",
	});
}

export default Component;
