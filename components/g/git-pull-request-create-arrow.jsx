import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/llyo8-6yr.css';
import '../../css/y/yc9mclg0j.css';
import '../../css/s/s6dkgxb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="llyo8-6yr"/><path class="yc9mclg0j"/><path class="s6dkgxb7c"/></g>`,
		"fallback": "lucide:git-pull-request-create-arrow",
	});
}

export default Component;
