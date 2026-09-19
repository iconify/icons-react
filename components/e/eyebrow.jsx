import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/b/b8jxfhb0t.css';
import '../../css/k/k-eaexmhb.css';
import '../../css/n/nxtfqrbmx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNrGRWdta"><g class="ufeehvblu"><path class="b8jxfhb0t"/><path class="k-eaexmhb"/><path class="nxtfqrbmx"/></g></mask></defs><path mask="url(#SVGNrGRWdta)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:eyebrow",
	});
}

export default Component;
