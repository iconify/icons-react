import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziwtgd5qw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ziwtgd5qw"/>`,
		"fallback": "ix:data-ingress-egress",
	});
}

export default Component;
