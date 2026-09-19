import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/q/qhvovpbja.css';
import '../../css/r/rfbqxvydy.css';
import '../../css/y/ym-r2bver.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGppvbXcOf"><g class="rohhhzb0l"><rect class="qhvovpbja"/><path class="rfbqxvydy"/><path class="ym-r2bver"/></g></mask></defs><path mask="url(#SVGppvbXcOf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:f-eight-key",
	});
}

export default Component;
