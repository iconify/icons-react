import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivjvz2eii.css';
import '../../css/v/v0hz1g5iy.css';
import '../../css/k/kz5bt151v.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgf_i8bzy.css';
import '../../css/x/xaeu_hbkf.css';
import '../../css/e/efaghzbqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGBwsjVIII" width="18" height="19" x="3" y="2" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="v0hz1g5iy"/><path class="kz5bt151v"/></mask><g class="ft5dv1b6b"><path class="wgf_i8bzy"/><path mask="url(#SVGBwsjVIII)" class="xaeu_hbkf"/><path class="efaghzbqa"/></g>`,
		"fallback": "lets-icons:chield-check-duotone-line",
	});
}

export default Component;
