import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/jkmkmiddv.css';
import '../../css/n/nb_t--bcm.css';
import '../../css/m/m9m_a4bdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG9IUqwblu" x1="9" x2="15" y1="1.26" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG9IUqwblu)" class="jkmkmiddv"/><path class="nb_t--bcm wm-a"/><path class="m9m_a4bdg wm-shine"/></g>`,
		"fallback": "withicons-utsav:candy-bucket",
	});
}

export default Component;
