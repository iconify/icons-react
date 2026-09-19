import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xntym-b4a.css';
import '../../css/y/yjgfdpbqp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTSh0ncfl"><g class="rohhhzb0l"><rect class="xntym-b4a"/><path class="yjgfdpbqp"/></g></mask></defs><path mask="url(#SVGTSh0ncfl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:digital-watches",
	});
}

export default Component;
