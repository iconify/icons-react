import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nstvbxb0m.css';
import '../../css/z/zukjp5bxm.css';
import '../../css/e/edbkswbvk.css';
import '../../css/e/ei60xkbzq.css';
import '../../css/t/ts74kj5dn.css';
import '../../css/u/ua6tm9bna.css';
import '../../css/m/m9ad-ebcz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nstvbxb0m"/><path clip-rule="evenodd" class="zukjp5bxm"/><path class="edbkswbvk"/><path clip-rule="evenodd" class="ei60xkbzq"/><path class="ts74kj5dn"/><path clip-rule="evenodd" class="ua6tm9bna"/><path clip-rule="evenodd" class="m9ad-ebcz"/>`,
		"fallback": "selfhst:amazon-s3",
	});
}

export default Component;
