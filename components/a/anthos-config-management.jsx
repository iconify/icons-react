import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cybmyib3k.css';
import '../../css/r/rdoevbfyc.css';
import '../../css/i/im1u3sbac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cybmyib3k"/><path class="rdoevbfyc"/><path class="im1u3sbac"/>`,
		"fallback": "gcp:anthos-config-management",
	});
}

export default Component;
