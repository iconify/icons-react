import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4i2bbc8w.css';
import '../../css/v/vyn2gq-gt.css';
import '../../css/i/i37-xgcps.css';
import '../../css/p/pjz8kwbbc.css';
import '../../css/v/v0m5xdb6q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="ipSCroissant0"><g class="ft5dv1b6b"><g clip-path="url(#ipSCroissant1)" class="a4i2bbc8w"><path class="vyn2gq-gt"/><path class="i37-xgcps"/><path class="pjz8kwbbc"/></g><defs><clipPath id="ipSCroissant1"><path class="v0m5xdb6q"/></clipPath></defs></g></mask><path mask="url(#ipSCroissant0)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:croissant",
	});
}

export default Component;
