import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0g6_mb0d.css';
import '../../css/d/d_rjh4bog.css';
import '../../css/f/f45d-jb5s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0g6_mb0d"/><path class="d_rjh4bog"/><circle class="f45d-jb5s"/>`,
		"fallback": "selfhst:haproxy-cluster-manager",
	});
}

export default Component;
