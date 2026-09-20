import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/r/rsibg6b6a.css';
import '../../css/n/ntre0bcvq.css';
import '../../css/t/tnpfj3tul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="rsibg6b6a"/><path clip-rule="evenodd" class="ntre0bcvq"/><path class="tnpfj3tul"/></g>`,
		"fallback": "streamline-logos:google-surveys-logo",
	});
}

export default Component;
