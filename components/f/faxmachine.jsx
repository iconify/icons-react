import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbfefqb9k.css';
import '../../css/d/dlw58kh3z.css';
import '../../css/o/ov49ujhiw.css';
import '../../css/x/xwqkw5i2m.css';
import '../../css/l/lvx4k8bzm.css';
import '../../css/w/w2ypl0b7q.css';
import '../../css/i/i-n485z0x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbfefqb9k"/><path class="dlw58kh3z"/><path class="ov49ujhiw"/><path class="xwqkw5i2m"/><circle class="lvx4k8bzm"/><path class="w2ypl0b7q"/><path class="i-n485z0x"/>`,
		"fallback": "fxemoji:faxmachine",
	});
}

export default Component;
