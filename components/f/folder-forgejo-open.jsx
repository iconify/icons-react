import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k51-r1btv.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g13-0uycq.css';
import '../../css/q/q2g7jop1r.css';
import '../../css/f/fgmv-t38b.css';
import '../../css/h/hvfzhob6z.css';
import '../../css/s/s5r0cdq5p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k51-r1btv"/><g transform="translate(14.53 10.455)scale(.08531)" class="ft5dv1b6b"><path class="g13-0uycq prefix__prefix__orange"/><path class="prefix__prefix__red q2g7jop1r"/><circle class="fgmv-t38b prefix__prefix__orange"/><circle class="hvfzhob6z prefix__prefix__red"/><circle class="prefix__prefix__red s5r0cdq5p"/></g>`,
		"fallback": "material-icon-theme:folder-forgejo-open",
	});
}

export default Component;
