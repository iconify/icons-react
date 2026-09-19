import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/j/jlnr15bxu.css';
import '../../css/i/i5-ng-btb.css';
import '../../css/t/tbfk-_6ot.css';
import '../../css/l/l-90x2_qh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGps2vrDJY"><g class="s9cl3zbei"><path class="jlnr15bxu"/><path class="i5-ng-btb"/><path class="tbfk-_6ot"/><path class="l-90x2_qh"/></g></mask></defs><path mask="url(#SVGps2vrDJY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:cola",
	});
}

export default Component;
