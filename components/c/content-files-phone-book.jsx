import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2jtlbtwq.css';
import '../../css/y/ykfflpb5w.css';
import '../../css/o/oakfhh70e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2jtlbtwq"/><path class="ykfflpb5w"/><path class="oakfhh70e"/>`,
		"fallback": "streamline-pixel:content-files-phone-book",
	});
}

export default Component;
