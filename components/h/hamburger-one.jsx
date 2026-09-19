import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q9w4fw2xg.css';
import '../../css/r/ro52czqkk.css';
import '../../css/h/h5g_z9czz.css';
import '../../css/w/wpop_mqpv.css';
import '../../css/k/k9--7-60y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRzC4sdRj"><g class="ft5dv1b6b"><path class="q9w4fw2xg"/><rect class="ro52czqkk"/><path class="h5g_z9czz"/><circle class="wpop_mqpv"/><circle class="k9--7-60y"/></g></mask></defs><path mask="url(#SVGRzC4sdRj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:hamburger-one",
	});
}

export default Component;
