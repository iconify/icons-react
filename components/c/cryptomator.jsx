import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnmzf65ay.css';
import '../../css/l/lp2l3fbnm.css';
import '../../css/h/hguy1jb9d.css';
import '../../css/c/cy6059bvk.css';
import '../../css/p/phqtmmyeb.css';
import '../../css/t/ti49w-b1a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnmzf65ay"/><path class="lp2l3fbnm"/><path class="hguy1jb9d"/><path class="cy6059bvk"/><path class="phqtmmyeb"/><path class="ti49w-b1a"/>`,
		"fallback": "selfhst:cryptomator",
	});
}

export default Component;
