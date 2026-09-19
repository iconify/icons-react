import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4xodpb5a.css';
import '../../css/u/uysq62-mn.css';
import '../../css/t/tcbtqgb3r.css';
import '../../css/m/m-24ijb3r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h4xodpb5a"><path class="uysq62-mn"/><ellipse class="tcbtqgb3r"/><path class="m-24ijb3r"/></g>`,
		"fallback": "catppuccin:dub-selections",
	});
}

export default Component;
