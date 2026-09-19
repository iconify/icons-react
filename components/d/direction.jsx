import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r5ke29wou.css';
import '../../css/k/kw5sjshgk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGuvfmNtB"><g class="ft5dv1b6b"><rect class="r5ke29wou"/><path class="kw5sjshgk"/></g></mask></defs><path mask="url(#SVGGuvfmNtB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:direction",
	});
}

export default Component;
