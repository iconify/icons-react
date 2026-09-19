import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/nfpxpmyht.css';
import '../../css/q/ql9sd2bvf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1aXMSbnJ"><g class="v3_i3wktz"><path class="nfpxpmyht"/><path class="ql9sd2bvf"/></g></mask></defs><path mask="url(#SVG1aXMSbnJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:alarm-clock",
	});
}

export default Component;
