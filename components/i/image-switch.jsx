import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm5zddb2t.css';
import '../../css/v/vcti67wgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm5zddb2t"/><path class="vcti67wgz"/>`,
		"fallback": "stash:image-switch",
	});
}

export default Component;
