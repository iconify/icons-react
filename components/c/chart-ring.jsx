import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/bzk2ng9yc.css';
import '../../css/i/iz7o08dmv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZYLLyNIJ"><g class="v3_i3wktz"><path class="bzk2ng9yc"/><path class="iz7o08dmv"/></g></mask></defs><path mask="url(#SVGZYLLyNIJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:chart-ring",
	});
}

export default Component;
