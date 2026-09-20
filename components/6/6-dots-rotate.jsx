import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/driw97bqn.css';
import '../../css/z/z2gjuvb_r.css';
import '../../css/y/yvpmx5b2p.css';
import '../../css/u/uxcj2w-3u.css';
import '../../css/x/x6-0engdv.css';
import '../../css/l/l2tcghb2s.css';
import '../../css/d/dojyil14w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g><circle class="driw97bqn"/><circle class="z2gjuvb_r"/><circle class="yvpmx5b2p"/><circle class="uxcj2w-3u"/><circle class="x6-0engdv"/><circle class="l2tcghb2s"/><circle class="dojyil14w"/><animateTransform attributeName="transform" calcMode="discrete" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"/></g>`,
		"fallback": "svg-spinners:6-dots-rotate",
	});
}

export default Component;
