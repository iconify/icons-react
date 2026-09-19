import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_ywewmwy.css';
import '../../css/b/bpu3pf_te.css';
import '../../css/a/acj9dacdv.css';
import '../../css/n/npij_fllq.css';
import '../../css/v/vf2lioboq.css';
import '../../css/f/f1n7cebai.css';
import '../../css/q/qk9ol1b-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_ywewmwy"/><circle class="bpu3pf_te"/><circle class="acj9dacdv"/><circle class="npij_fllq"/><circle class="vf2lioboq"/><circle class="f1n7cebai"/><circle class="qk9ol1b-o"/>`,
		"fallback": "gcp:api-monetization",
	});
}

export default Component;
