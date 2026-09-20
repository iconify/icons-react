import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/j/jezmz7bhz.css';
import '../../css/j/jv223fbvp.css';
import '../../css/x/xos270bgg.css';
import '../../css/m/mkh82actf.css';
import '../../css/w/wi4mv4bws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="jezmz7bhz"/><path class="jv223fbvp"/><path class="xos270bgg"/><path class="mkh82actf"/><path class="wi4mv4bws"/></g>`,
		"fallback": "streamline-cyber:camera-polaroid",
	});
}

export default Component;
