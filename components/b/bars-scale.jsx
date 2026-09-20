import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkrd2ib8n.css';
import '../../css/a/avt_w8bte.css';
import '../../css/i/i6d7m5nea.css';
import '../../css/h/hkr1j-bpp.css';
import '../../css/s/sjp56xb8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect height="12" y="6" class="lkrd2ib8n"><animate id="SVGLQdHQe4p" attributeName="y" begin="0;SVGg3vsIeGm.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/><animate attributeName="height" begin="0;SVGg3vsIeGm.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/></rect><rect height="12" y="6" class="avt_w8bte"><animate attributeName="y" begin="SVGLQdHQe4p.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/><animate attributeName="height" begin="SVGLQdHQe4p.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/></rect><rect height="12" y="6" class="i6d7m5nea"><animate attributeName="y" begin="SVGLQdHQe4p.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/><animate attributeName="height" begin="SVGLQdHQe4p.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/></rect><rect height="12" y="6" class="hkr1j-bpp"><animate attributeName="y" begin="SVGLQdHQe4p.begin+0.3s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/><animate attributeName="height" begin="SVGLQdHQe4p.begin+0.3s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/></rect><rect height="12" y="6" class="sjp56xb8c"><animate id="SVGg3vsIeGm" attributeName="y" begin="SVGLQdHQe4p.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/><animate attributeName="height" begin="SVGLQdHQe4p.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/></rect>`,
		"fallback": "svg-spinners:bars-scale",
	});
}

export default Component;
