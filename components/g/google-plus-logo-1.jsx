import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/k/kifoihz5d.css';
import '../../css/q/q54lazbhf.css';
import '../../css/l/lr3j1wnjc.css';
import '../../css/p/plpb9-b4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="kifoihz5d"/><path class="q54lazbhf"/><path class="lr3j1wnjc"/><path class="plpb9-b4s"/></g>`,
		"fallback": "streamline-logos:google-plus-logo-1",
	});
}

export default Component;
