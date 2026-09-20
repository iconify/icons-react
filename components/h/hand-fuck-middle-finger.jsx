import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2_ycobki.css';
import '../../css/g/gtechvnvb.css';
import '../../css/n/nmt5nmbvs.css';
import '../../css/y/y6k7ypb_p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2_ycobki"/><path class="gtechvnvb"/><path class="nmt5nmbvs"/><path class="y6k7ypb_p"/>`,
		"fallback": "streamline-pixel:hand-fuck-middle-finger",
	});
}

export default Component;
