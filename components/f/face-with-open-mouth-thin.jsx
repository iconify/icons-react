import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xr1zzs9rr.css';
import '../../css/e/erc-dgglp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="xr1zzs9rr"/><path class="erc-dgglp"/></g>`,
		"fallback": "iconamoon:face-with-open-mouth-thin",
	});
}

export default Component;
