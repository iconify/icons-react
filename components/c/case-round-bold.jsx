import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lineszbmd.css';
import '../../css/y/yp3yidbbi.css';
import '../../css/i/iuq7zmbfp.css';
import '../../css/u/udl63nbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lineszbmd"/><path class="yp3yidbbi"/><path class="iuq7zmbfp"/><path class="udl63nbzh"/>`,
		"fallback": "solar:case-round-bold",
	});
}

export default Component;
