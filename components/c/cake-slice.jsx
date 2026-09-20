import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbsnqqbel.css';
import '../../css/d/dwo_--a8w.css';
import '../../css/g/gxic06lfc.css';
import '../../css/i/ixiz7obtb.css';
import '../../css/o/omr6hacch.css';
import '../../css/v/v78vyiifn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rbsnqqbel"/><path class="dwo_--a8w"/><path class="gxic06lfc"/><path class="ixiz7obtb"/><path class="omr6hacch"/><path class="v78vyiifn"/></g>`,
		"fallback": "streamline-flex-color:cake-slice",
	});
}

export default Component;
