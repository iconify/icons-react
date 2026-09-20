import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7azwk40j.css';
import '../../css/z/zx-jj4ivt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7azwk40j"/><path class="zx-jj4ivt"/>`,
		"fallback": "token:conv",
	});
}

export default Component;
