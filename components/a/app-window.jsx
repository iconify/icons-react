import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/o/ood7osb5w.css';
import '../../css/v/v5a3ll5yr.css';
import '../../css/g/g4jq594cw.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="ood7osb5w"/><path class="v5a3ll5yr"/><path class="g4jq594cw"/></g>`,
		"fallback": "streamline-stickies-color:app-window",
	});
}

export default Component;
