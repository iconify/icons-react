import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/jf4xiob2j.css';
import '../../css/n/n-8901blk.css';
import '../../css/i/in_9y-pym.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtdXAid2e"><g class="aql7dnt-u"><path class="jf4xiob2j"/><rect class="n-8901blk"/><path class="in_9y-pym"/></g></mask></defs><path mask="url(#SVGtdXAid2e)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:beauty-instrument",
	});
}

export default Component;
