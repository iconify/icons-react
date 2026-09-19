import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oel34lrcl.css';
import '../../css/l/l4y1h7b8q.css';
import '../../css/q/qug4cqf0k.css';
import '../../css/z/z_ar8h2tr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpXjuwbUV"><g class="ufeehvblu"><path class="oel34lrcl"/><path class="l4y1h7b8q"/><path class="qug4cqf0k"/><path class="z_ar8h2tr"/></g></mask></defs><path mask="url(#SVGpXjuwbUV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:fire-extinguisher-one",
	});
}

export default Component;
