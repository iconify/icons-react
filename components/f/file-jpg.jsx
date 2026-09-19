import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/if55a7bnz.css';
import '../../css/n/n30r1sbok.css';
import '../../css/j/j5nytdpoh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkenedgrD"><g class="rohhhzb0l"><path class="if55a7bnz"/><path class="n30r1sbok"/><path class="j5nytdpoh"/></g></mask></defs><path mask="url(#SVGkenedgrD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-jpg",
	});
}

export default Component;
