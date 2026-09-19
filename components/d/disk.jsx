import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/i11utwbak.css';
import '../../css/d/d3p-utluv.css';
import '../../css/h/ht8ohn1mx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcc8hxeop"><g class="rohhhzb0l"><path class="i11utwbak"/><path class="d3p-utluv"/><path class="ht8ohn1mx"/></g></mask></defs><path mask="url(#SVGcc8hxeop)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:disk",
	});
}

export default Component;
