import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj6gwrmjs.css';
import '../../css/a/ansz7zi1p.css';
import '../../css/o/o763h1bwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oj6gwrmjs"/><path class="ansz7zi1p"/><path class="o763h1bwl"/>`,
		"fallback": "solar:file-type-bold-duotone",
	});
}

export default Component;
