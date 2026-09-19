import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ibxw97a7i.css';
import '../../css/n/nccfcsxui.css';
import '../../css/n/nkchmbc-t.css';
import '../../css/f/fr236kbdl.css';
import '../../css/b/bxegrmbjp.css';
import '../../css/s/se36adcuq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVG1UsBqcNm)" clip-rule="evenodd" class="ibxw97a7i"/><path fill="url(#SVGKboikK4R)" class="nccfcsxui"/><defs><linearGradient id="SVG1UsBqcNm" x1="7.65" x2="17.1" y1="2.286" y2="16" gradientUnits="userSpaceOnUse"><stop class="nkchmbc-t"/><stop offset="1" class="fr236kbdl"/></linearGradient><linearGradient id="SVGKboikK4R" x1="3.189" x2="5.737" y1="5.595" y2="15.361" gradientUnits="userSpaceOnUse"><stop offset=".125" class="bxegrmbjp"/><stop offset="1" class="se36adcuq"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:apps-list-detail-20",
	});
}

export default Component;
