import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggqfe_bpq.css';
import '../../css/v/v6c-0jbmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggqfe_bpq"/><path class="v6c-0jbmh"/>`,
		"fallback": "streamline-ultimate:coding-apps-website-virus-files-alert-1-bold",
	});
}

export default Component;
