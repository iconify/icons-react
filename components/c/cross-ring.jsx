import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/t/tk146ob_t.css';
import '../../css/s/sluqj5bks.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3OxGFd7z"><g class="v3_i3wktz"><path class="tk146ob_t"/><path class="sluqj5bks"/></g></mask></defs><path mask="url(#SVG3OxGFd7z)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:cross-ring",
	});
}

export default Component;
