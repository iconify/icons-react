import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6ue2-jip.css';
import '../../css/y/yy45p2b8q.css';
import '../../css/z/z271pgbsb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6ue2-jip"/><path class="yy45p2b8q"/><circle class="z271pgbsb"/>`,
		"fallback": "selfhst:google-tag-manager",
	});
}

export default Component;
