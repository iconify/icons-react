import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj6gwrmjs.css';
import '../../css/x/xqwccrb2b.css';
import '../../css/y/ycy7myf2q.css';
import '../../css/x/x4f46-b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oj6gwrmjs"/><path clip-rule="evenodd" class="xqwccrb2b"/><path clip-rule="evenodd" class="ycy7myf2q"/><path class="x4f46-b2l"/>`,
		"fallback": "solar:file-sliders-bold-duotone",
	});
}

export default Component;
