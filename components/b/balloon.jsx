import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhwwc2blb.css';
import '../../css/b/bef-jeb5r.css';
import '../../css/n/nz-mu3bbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhwwc2blb wm-a"/><path class="bef-jeb5r wm-k"/><path class="nz-mu3bbv wm-a"/>`,
		"fallback": "withicons-bauhaus:balloon",
	});
}

export default Component;
