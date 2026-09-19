import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0jksjblz.css';
import '../../css/p/p4279rb6k.css';
import '../../css/g/g-w954bqb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIo8n4dzO"><g class="ft5dv1b6b"><circle class="t0jksjblz"/><path class="p4279rb6k"/><path class="g-w954bqb"/></g></mask></defs><path mask="url(#SVGIo8n4dzO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:copyright",
	});
}

export default Component;
