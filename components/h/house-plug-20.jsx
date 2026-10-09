import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpx9c7b2s.css';
import '../../css/p/pc2anacvy.css';
import '../../css/h/hkv3ewbfw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpx9c7b2s"/><path class="pc2anacvy"/><path class="hkv3ewbfw"/>`,
		"fallback": "energy-icons:house-plug-20",
	});
}

export default Component;
