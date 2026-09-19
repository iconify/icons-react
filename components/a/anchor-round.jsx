import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e9bm3i9jh.css';
import '../../css/g/gpfbbuj1p.css';
import '../../css/z/z_4r70l9a.css';
import '../../css/d/dhsxfubbd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFWDy1bBg"><g class="aql7dnt-u"><path class="e9bm3i9jh"/><circle class="gpfbbuj1p"/><circle class="z_4r70l9a"/><circle class="dhsxfubbd"/></g></mask></defs><path mask="url(#SVGFWDy1bBg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:anchor-round",
	});
}

export default Component;
