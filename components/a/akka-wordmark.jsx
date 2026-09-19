import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb_6iza3u.css';
import '../../css/g/gi3nmwdkw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb_6iza3u"/><path class="gi3nmwdkw"/>`,
		"fallback": "devicon:akka-wordmark",
	});
}

export default Component;
