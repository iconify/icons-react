import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/t/taetgzrim.css';
import '../../css/i/i2innpbyc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGw2JMGVNV"><g class="hv130ab-t"><path class="taetgzrim"/><path class="i2innpbyc"/></g></mask></defs><path mask="url(#SVGw2JMGVNV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:distribute-vertical-spacing",
	});
}

export default Component;
