import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/s/sjxycbjzr.css';
import '../../css/x/xdjtwgb7o.css';
import '../../css/j/jbtaph4oz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlkr5ieYj"><g class="s9cl3zbei"><path class="sjxycbjzr"/><path class="xdjtwgb7o"/><path class="jbtaph4oz"/></g></mask></defs><path mask="url(#SVGlkr5ieYj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:icecream-five",
	});
}

export default Component;
