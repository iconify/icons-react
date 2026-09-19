import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/l/lg4mh0b6b.css';
import '../../css/j/jxi8n5bns.css';
import '../../css/l/l_t1d5bcy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9lASojvN"><g class="rohhhzb0l"><path clip-rule="evenodd" class="lg4mh0b6b"/><path class="jxi8n5bns"/><path class="l_t1d5bcy"/></g></mask></defs><path mask="url(#SVG9lASojvN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:eyes",
	});
}

export default Component;
