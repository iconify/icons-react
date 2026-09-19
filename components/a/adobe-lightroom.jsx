import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m2blynbna.css';
import '../../css/z/zsjkbubwq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGmpuGweUz"><g class="s9cl3zbei"><path class="m2blynbna"/><path class="zsjkbubwq"/></g></mask></defs><path mask="url(#SVGmpuGweUz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:adobe-lightroom",
	});
}

export default Component;
