import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m2blynbna.css';
import '../../css/k/kovb_ybdx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUEz4Eipu"><g class="s9cl3zbei"><path class="m2blynbna"/><path class="kovb_ybdx"/></g></mask></defs><path mask="url(#SVGUEz4Eipu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:checkbox",
	});
}

export default Component;
