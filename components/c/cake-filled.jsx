import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/e/e9-zai.css';
import '../../css/d/dm-51m.css';
import '../../css/c/c-b7rz.css';
import '../../css/e/euxzke.css';
import '../../css/y/ydovum.css';
import '../../css/w/wv2k7z.css';
import '../../css/s/so-from-30.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-ll345f.css';
import '../../css/f/fill-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c e9-zai"/><path class="a0m25c dm-51m"/><path class="a0m25c c-b7rz"/><path class="euxzke ydovum"/><path class="wv2k7z ydovum"/>`,
		"fallback": "line-md:cake-filled",
	});
}

export default Component;
