import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_vno6lyy.css';
import '../../css/d/di58slb2p.css';
import '../../css/c/ciagaqbiu.css';
import '../../css/d/d_95t9p3o.css';
import '../../css/n/ndqnd3f3q.css';
import '../../css/g/gm5u1vz7s.css';
import '../../css/v/v0u-qcbdb.css';
import '../../css/d/dygajpmlm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGio5K8bGP" x1="386.25" x2="125.75" y1="481.599" y2="30.401" gradientUnits="userSpaceOnUse"><stop offset="0" class="l_vno6lyy"/><stop offset=".1" class="di58slb2p"/><stop offset=".264" class="ciagaqbiu"/><stop offset=".47" class="d_95t9p3o"/><stop offset=".71" class="ndqnd3f3q"/><stop offset=".977" class="gm5u1vz7s"/><stop offset="1" class="v0u-qcbdb"/></linearGradient><path fill="url(#SVGio5K8bGP)" class="dygajpmlm"/>`,
		"fallback": "selfhst:barcode-buddy",
	});
}

export default Component;
