import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/z/z84e8ubat.css';
import '../../css/z/zsz-dtnnl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEyc5gdav"><g class="adexpl72i"><path clip-rule="evenodd" class="z84e8ubat"/><path class="zsz-dtnnl"/></g></mask></defs><path mask="url(#SVGEyc5gdav)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:gps",
	});
}

export default Component;
