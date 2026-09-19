import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/iwuczv0ck.css';
import '../../css/u/u8-zfpbxo.css';
import '../../css/w/wjp08nafp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="iwuczv0ck"/><path class="u8-zfpbxo"/><path class="wjp08nafp"/></g>`,
		"fallback": "iconoir:bridge-3d",
	});
}

export default Component;
