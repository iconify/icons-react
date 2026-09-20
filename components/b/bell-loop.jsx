import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/a/a9infz.css';
import '../../css/v/vfbpaz.css';
import '../../css/r/rmfyct.css';
import '../../css/s/so-from-4.css';
import '../../css/t/tr-6vhkny.css';
import '../../css/s/so-to-0.css';
import '../../css/t/tr--mk6os.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c a9infz"/><path class="a0m25c vfbpaz"/><path class="a0m25c rmfyct"/>`,
		"fallback": "line-md:bell-loop",
	});
}

export default Component;
