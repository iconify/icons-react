import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi54cacqb.css';
import '../../css/d/d4gaxti0m.css';
import '../../css/y/yzlloix7v.css';
import '../../css/f/fw96eeyjg.css';
import '../../css/c/c58s-15sd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mi54cacqb"/><path clip-rule="evenodd" class="d4gaxti0m"/><path class="yzlloix7v"/><path class="fw96eeyjg"/><path class="c58s-15sd"/>`,
		"fallback": "streamline-freehand:image-file-dollar",
	});
}

export default Component;
