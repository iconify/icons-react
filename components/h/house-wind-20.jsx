import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpx9c7b2s.css';
import '../../css/t/txjejvbqg.css';
import '../../css/b/bl7dph6nh.css';
import '../../css/e/evm-be1zu.css';
import '../../css/n/njoh_kbze.css';
import '../../css/m/mbh0wwbdr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpx9c7b2s"/><path class="txjejvbqg"/><path class="bl7dph6nh"/><path class="evm-be1zu"/><path class="njoh_kbze"/><path class="mbh0wwbdr"/>`,
		"fallback": "energy-icons:house-wind-20",
	});
}

export default Component;
