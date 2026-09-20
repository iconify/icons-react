import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvhfowbwj.css';
import '../../css/g/g07g3bsws.css';
import '../../css/a/alue3ml6o.css';
import '../../css/x/x2lh0-b2f.css';
import '../../css/d/d-ia66bac.css';
import '../../css/m/m1421cuim.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvhfowbwj"/><path class="g07g3bsws"/><path class="alue3ml6o"/><path class="x2lh0-b2f"/><path class="d-ia66bac"/><path class="m1421cuim"/>`,
		"fallback": "selfhst:freepbx",
	});
}

export default Component;
