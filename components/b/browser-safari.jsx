import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x36h_kb1w.css';
import '../../css/a/a8_rvkruz.css';
import '../../css/u/ufkix4bpb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjAI5eeMX"><g class="ft5dv1b6b"><path class="x36h_kb1w"/><path class="a8_rvkruz"/><path clip-rule="evenodd" class="ufkix4bpb"/></g></mask></defs><path mask="url(#SVGjAI5eeMX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:browser-safari",
	});
}

export default Component;
