import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/hcent-gle.css';
import '../../css/i/ia73ntbug.css';
import '../../css/h/had8q-s7j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGem32ZcMG"><g class="aql7dnt-u"><path class="hcent-gle"/><path clip-rule="evenodd" class="ia73ntbug"/><path class="had8q-s7j"/></g></mask></defs><path mask="url(#SVGem32ZcMG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:building-two",
	});
}

export default Component;
