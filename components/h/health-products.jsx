import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/y/ybvz-7b8t.css';
import '../../css/d/dt1v414uk.css';
import '../../css/g/gqzk3x96x.css';
import '../../css/t/t7ty-wb8u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGuf0tecPi"><g class="wwvp95byt"><path class="ybvz-7b8t"/><path class="dt1v414uk"/><path class="gqzk3x96x"/><circle class="t7ty-wb8u"/></g></mask></defs><path mask="url(#SVGuf0tecPi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:health-products",
	});
}

export default Component;
